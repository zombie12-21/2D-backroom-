export const RECIPES=[
{id:"spear",name:"Scrap Spear",need:{crowbar:1,duct_tape:1},gives:"spear",desc:"Crowbar + tape = long reach spear."},
{id:"darts2",name:"Almond Bundle",need:{almond_water:1,energy_bar:1},gives:"almond_darts",desc:"Infuse darts with almond water."},
{id:"med2",name:"Field Medkit",need:{bandage:2,almond_water:1},gives:"medkit",desc:"2 bandages + almond water."},
{id:"nails2",name:"Nail Bomb",need:{batteries:1,duct_tape:1},gives:"repellent",desc:"Battery acid + tape = repellent."},
{id:"stim",name:"Stim Shot",need:{coffee:1,energy_bar:1},gives:"adrenaline",desc:"Coffee + bar = full sprint + heal."},
{id:"armor",name:"Taped Jacket",need:{duct_tape:2},gives:"jacket",desc:"-40% damage while held."},
];
export function canCraft(inv,recipe){
let c={};inv.forEach(i=>c[i]=(c[i]||0)+1);
return Object.entries(recipe.need).every(([k,n])=>(c[k]||0)>=n);
}
export function doCraft(inv,recipe){
for(let[k,n]of Object.entries(recipe.need))for(let i=0;i<n;i++)inv.splice(inv.indexOf(k),1);
return recipe.gives;
}
