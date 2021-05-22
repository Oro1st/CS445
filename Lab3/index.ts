class University {
    name: string;
    dept: string;
    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void {
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);