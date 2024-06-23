import * as fs from 'fs';
import { A, B } from './type';

const node = {};

class Subcategory {}

class AccurateCategory {
    value(value: string) {}
    show() {}
}

class CategoryReturn {
    private node: Record<A, B> = {};
    private name: string = "";

    constructor(rnode: Record<A, B>, namer: string, options?: any) {
        this.node = rnode;
        this.name = namer;
    }

    value(value: string) {
        this.node["category"] = this.name;
        this.node["value"] = value;
    }

    accurate(): AccurateCategory {
        return new AccurateCategory();
    }

    subcategory(value: string) {
        return new Subcategory();
    }

    show() {
        console.log(`category: ${this.name}\nvalue: ${this.node.value}`);
    }

    values(...value: B[]) {
        const testr = value.join(", ");

        if (!this.node["category"]) {
            this.node["category"] = this.name;
        }

        else {
            return;
        }

        this.node["value"] = testr;
    }

    customcartx() {}
}

function category(node: Record<A, B>, name: string, options?: any): CategoryReturn {
    return new CategoryReturn(node, name, options);
}

export { category as cartx };