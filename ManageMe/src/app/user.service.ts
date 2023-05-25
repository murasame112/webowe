import { Injectable } from '@angular/core';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  public saveUser(user: User) {
    //TODO: jesli obiekt z tym samym key juz istnieje, to go usunac (ewentualnie sprawdzic czy setItem automatycznie nadpisuje)
    let key = 'undefined_key';
    if(typeof user.key == 'string'){
      key = user.key;
    }
    let userJson = JSON.stringify(user);
    localStorage.setItem(key, userJson);
  }

  // returns array of all users
  getUsers(){
    if(localStorage.length == 0){
      // TODO: przemyslec jak to rozwiazac inaczej niz return false
        //return false;
    }

    const users: Array<User> = [];

    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('u')){
        // TODO: wymyslic jak sie pozbyc ponizszego if'a
        if(typeof value == 'string'){
          const usr: User = JSON.parse(value);
          users.push(usr);
        }
      }

    }
    return users;
  }


  // returns user by key
  getUserByKey(key: string){
    const users:Array<User> = this.getUsers();
    let found:User|undefined = users.find(element => element.key == key);
    return found as User;
  }

  // creates user (just like constructor)
  createUser(login: string, passowrd: string, name: string, surname: string, permissions: string){
    let user: User = {
      key: undefined,
      login: undefined,
      password: undefined,
      name: undefined,
      surname: undefined,
      permissions: undefined,
    };

    let key = 'u';
    let highest = '';
    let highestId = 0;
    let newHighestId = 0;
    let storage: any = {},
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        storage[keys[i]] =  localStorage.getItem(keys[i]);
    }
    for (const [key, value] of Object.entries(storage)) {
      if(key.startsWith('u')){
        highest = key;
        highest = highest.slice(1);
        newHighestId = parseInt(highest, 10);
        if(newHighestId > highestId){
          highestId = newHighestId;
        }
      }

    }
    highestId++;
    key += highestId;
    user.key = key;
    user.login = login;
    user.password = passowrd;
    user.name = name;
    user.surname = surname;
    user.permissions = permissions;

    return user;

  }

  // creates few default projects for testing
  createDefault(){
    let u1 = this.createUser('login_james', 'password_james', 'James', 'Raynor', 'developer');
    this.saveUser(u1);
    let u2 = this.createUser('login_sarah', 'password_sarah', 'Sarah', 'Kerrigan', 'devops');
    this.saveUser(u2);
    let u3 = this.createUser('login_nova', 'password_nova', 'November', 'Terra', 'admin');
    this.saveUser(u3);


  }

  // deletes user
  deleteUser(key: string){
    localStorage.removeItem(key);
  }
}
