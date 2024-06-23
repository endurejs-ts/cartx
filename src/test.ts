import cartx from './lib';

const node = {};
cartx(node, "food").value("apple");

const c = cartx(node, "food");
c.value("csldkas")