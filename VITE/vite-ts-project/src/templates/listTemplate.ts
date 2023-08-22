import FullList from '../model/FullList';

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(FullList: FullList): void;
}

//ListTemplate class
//export default
//implement DOM List interface
//singleton
//clear method to clear out html in ul
//render should render full list
//html

export default class ListTemplate implements DOMList {
  static instance: DOMList = new DOMList();

  private constructor() {
    ul: HTLMLUListElement;

    this.ul = document.getElementById('listItems') as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = ' ';
  }

  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((item) => {
      const li = document.createElement('li') as HTMLLIElement;
      li.className = 'item';

      const check = document.createElement('input') as HTMLInputElement;
    });
  }
}
