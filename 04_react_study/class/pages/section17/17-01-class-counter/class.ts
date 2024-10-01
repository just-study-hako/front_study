
/*
class Date {
    //function, const 이런거 안붙임
    getFullYear() {

    }
    getMonth () {

    }

    // 변수도 const 안붙임
    a = 3
}
*/
/*
const date =new Date() 
console.log(date.getFullYear())
console.log(date.getMonth())
*/

// 몬스터 클래스 만들기
class Monster {
    power = 50
    attack() {
        console.log("공격!")
    }
}

// 이런 클래스를 기반으로 강한 몬스터를 만들 수 있음
class SuperMonster extends Monster { // 상속
    run() {
        console.log("도망가기!")
    }

    attack() {  // 동일한 이름의 기능이 있으면 덮어씌워버리게됨.  (오버라이딩)
        console.log("강한 공격")
    }
}

const monster1 =new SuperMonster();
const monster2 =new SuperMonster();
const monster3 = new Monster();
monster1.run;
monster3.attack;
