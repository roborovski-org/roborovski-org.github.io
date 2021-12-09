<template>
<div class="flip-clock">
    <template v-for="data in timeData" v-show="show">
        <span v-bind:key="data.label" class="flip-clock__piece" :id="data.elementId" v-show="data.show">
            <span class="flip-clock__card flip-card" :style="countdownSize ? `font-size:${countdownSize}` : ''">
                <b class="flip-card__top">{{ data.current | twoDigits }}</b>
                <b class="flip-card__bottom" v-bind:data-value="data.current | twoDigits"></b>
                <b class="flip-card__back" v-bind:data-value="data.previous | twoDigits"></b>
                <b class="flip-card__back-bottom" v-bind:data-value="data.previous | twoDigits"></b>
            </span>
            <span class="flip-clock__slot" :style="labelSize ? `font-size:${labelSize}` : ''">{{ data.label }}</span>
        </span>
    </template>
</div>
</template>

<script>
const uuidv4 = require('uuid/v4');
export default {
    name: 'flipCountdown',
    props: {
        deadline: {
            type: String,
        },
        stop: {
            type: Boolean,
        },
        showDays: {
            type: Boolean,
            required: false,
            default: true,
        },
        showHours: {
            type: Boolean,
            required: false,
            default: true,
        },
        showMinutes: {
            type: Boolean,
            required: false,
            default: true,
        },
        showSeconds: {
            type: Boolean,
            required: false,
            default: true,
        },
        labels: {
            type: Object,
            required: false,
            default: function () {
                return {
                    days: 'DAY',
                    hours: 'HRS',
                    minutes: 'MIN',
                    seconds: 'SEC',
                };
            },
        },
        countdownSize: {
            type: String,
            required: false,
        },
        labelSize: {
            type: String,
            required: false,
        },
    },
    data() {
        const uuid = uuidv4();
        return {
            now: Math.trunc(new Date().getTime() / 1000),
            date: null,
            interval: null,
            diff: 0,
            show: false,
            timeData: [{
                    current: 0,
                    previous: 0,
                    label: this.labels.days,
                    elementId: 'flip-card-days-' + uuid,
                    show: this.showDays,
                },
                {
                    current: 0,
                    previous: 0,
                    label: this.labels.hours,
                    elementId: 'flip-card-hours-' + uuid,
                    show: this.showHours,
                },
                {
                    current: 0,
                    previous: 0,
                    label: this.labels.minutes,
                    elementId: 'flip-card-minutes-' + uuid,
                    show: this.showMinutes,
                },
                {
                    current: 0,
                    previous: 0,
                    label: this.labels.seconds,
                    elementId: 'flip-card-seconds-' + uuid,
                    show: this.showSeconds,
                },
            ],
        };
    },
    created() {
        if (!this.deadline) {
            throw new Error("Missing props 'deadline'");
        }
        const endTime = this.deadline;
        this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000);
        if (!this.date) {
            throw new Error("Invalid props value, correct the 'deadline'");
        }
        this.interval = setInterval(() => {
            this.now = Math.trunc(new Date().getTime() / 1000);
        }, 1000);
    },
    mounted() {
        if (this.diff !== 0) {
            this.show = true;
        }
    },
    computed: {
        seconds() {
            return Math.trunc(this.diff) % 60;
        },
        minutes() {
            return Math.trunc(this.diff / 60) % 60;
        },
        hours() {
            return Math.trunc(this.diff / 60 / 60) % 24;
        },
        days() {
            return Math.trunc(this.diff / 60 / 60 / 24);
        },
    },
    watch: {
        deadline: function (newVal, oldVal) {
            const endTime = this.deadline;
            this.date = Math.trunc(Date.parse(endTime.replace(/-/g, '/')) / 1000);
            if (!this.date) {
                throw new Error("Invalid props value, correct the 'deadline'");
            }
        },
        now(value) {
            this.diff = this.date - this.now;
            if (this.diff <= 0 || this.stop) {
                this.diff = 0;
                this.updateTime(3, 0);
            } else {
                this.updateAllCards();
            }
        },
        diff(value) {
            if (value === 0) {
                this.$emit('timeElapsed');
                this.updateAllCards();
            }
        },
    },
    filters: {
        twoDigits(value) {
            if (value.toString().length <= 1) {
                return '0' + value.toString();
            }
            return value.toString();
        },
    },
    methods: {
        updateAllCards() {
            this.updateTime(0, this.days);
            this.updateTime(1, this.hours);
            this.updateTime(2, this.minutes);
            this.updateTime(3, this.seconds);
        },
        updateTime(idx, newValue) {
            if (idx >= this.timeData.length || newValue === undefined) {
                return;
            }
            if (window['requestAnimationFrame']) {
                this.frame = requestAnimationFrame(this.updateTime.bind(this));
            }
            const d = this.timeData[idx];
            const val = newValue < 0 ? 0 : newValue;
            const el = document.querySelector(`#${d.elementId}`);
            if (val !== d.current) {
                d.previous = d.current;
                d.current = val;
                if (el) {
                    el.classList.remove('flip');
                    void el.offsetWidth;
                    el.classList.add('flip');
                }
                if (idx === 0) {
                    const els = el.querySelectorAll('span b');
                    if (els) {
                        for (let e of els) {
                            const cls = e.classList[0];
                            if (newValue / 1000 >= 1) {
                                if (!cls.includes('-4digits')) {
                                    const newCls = cls + '-4digits';
                                    e.classList.add(newCls);
                                    e.classList.remove(cls);
                                }
                            } else {
                                if (cls.includes('-4digits')) {
                                    const newCls = cls.replace('-4digits', '');
                                    e.classList.add(newCls);
                                    e.classList.remove(cls);
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    beforeDestroy() {
        if (window['cancelAnimationFrame']) {
            cancelAnimationFrame(this.frame);
        }
    },
    destroyed() {
        clearInterval(this.interval);
    },
};
</script>

<style lang="sass" scoped>
@import "../../assets/sass/mixins/mixins.sass"
.flip-clock
  display: flex
  justify-content: flex-start
  align-items: center
  & > span
    background-color: $white
    border-radius: .2rem
    width: 5.6rem
    height: 7.2rem
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    &:first-child
      border-radius: .4rem .2rem .2rem .4rem
    &:last-child
      border-radius: .2rem .4rem .4rem .2rem
    &:not(:last-child)
      margin-right: .4rem
  &__card
    font-family: Karantina
    font-size: 4.8rem
    font-weight: normal
    line-height: 0.75em
    text-align: center
    color: $text-l-text-l-80
    font-weight: 600
  &__slot
    @include font(1.3rem, 1.23em, 600, 1px)
    text-align: center
    color: $text-l-60
    margin-top: .8rem

.flip-card
    display: block
    position: relative
    

.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after 
    display: block

.flip-card__top-4digits,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits,
.flip-card__back-4digits::before,
.flip-card__back-4digits::after
    display: block

.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__bottom-4digits,
.flip-card__back-bottom-4digits
    color: #ffdc00
    position: absolute
    top: 50%
    left: 0
    border-top: solid 1px #000
    background: #393939
    pointer-events: none
    overflow: hidden
    z-index: 2

.flip-card__back-bottom,
.flip-card__back-bottom-4digits 
    z-index: 1

.flip-card__bottom::after,
.flip-card__back-bottom::after,
.flip-card__bottom-4digits::after,
.flip-card__back-bottom-4digits::after 
    display: block

  
</style>