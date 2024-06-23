import cartx from './lib';

const node = {};
const c = cartx(node, "food");
c.values("egg", "steak", "fruits");

c.show();