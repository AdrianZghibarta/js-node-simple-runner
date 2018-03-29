var Something = {
    cool: function() {
        this.greeting = "Hello World";
        this.count = this.count ? this.count + 1 : 1;
    }
};

Something.cool();
console.log(Something.greeting);
console.log(Something.count);

var Another = {
    cool: function() {
        // implicit mixin of `Something` to `Another`
        Something.cool.call( this );
    }
};

Another.cool();
console.log(Another.greeting); // "Hello World"
console.log(Another.count); // 1 (not shared state with `Something`)