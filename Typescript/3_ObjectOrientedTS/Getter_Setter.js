// tsc -t es5 Getter_Setter.ts
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 100) {
                try {
                    throw new Error('The age is invalid');
                }
                catch (e) {
                    console.log("invalid age" + e);
                }
                this._age = 0;
            }
            else {
                this._age = theAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getAge = function () {
        return this._age;
    };
    return Person;
}());
var personObj = new Person();
personObj.age = 11;
console.log(personObj.getAge());
