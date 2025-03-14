"use strict";
const instance = create({
    data() {
        return {
            firstName: 'Ivan',
            lastName: 'James',
        };
    },
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        },
    },
    methods: {
        getRandom() {
            return Math.random();
        },
        hi() {
            alert(this.fullName.toLowerCase());
        },
        test() {
            console.log(this.fullName);
        }
    }
});
