import {Friend, Colleague } from './myTypes'

import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(f: Friend[]): string[] {
    let o: string[] = [];
    f.forEach(
        (f) => {o.push(`${f.name} is now ${f.age + 1}` );}
    )
    return o;
}

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

function addColleague(colleagues: Colleague[], name: string, department: string, email: string){
    const colleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highestExtension(colleagues).contact.extension + 1
        }
    }
    colleagues.push(colleague)
  }

// console.log(older(friends[0]))
// console.log(allOlder(friends))
// console.log(highestExtension(colleagues.current));
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));