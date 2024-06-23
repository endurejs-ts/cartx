import * as fs from 'fs';
import { A, B } from './type';

const node = {};

class AccurateCategory {
    value(value: string) {}
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
}

function category(node: Record<A, B>, name: string, options?: any): CategoryReturn {
    return new CategoryReturn(node, name, options);
}

export { category as cartx };