export function getCustomProperty(ele,prop){
return parseFloat(getComputedStyle(ele).getPropertyValue(prop)) || 0
}
export function setCustomProperty(ele,prop,value){
    ele.style.setProperty(prop,value)

}
export function incrementCustomProperty(ele,prop,inc){
    setCustomProperty(ele,prop,getCustomProperty(ele,prop) + inc )
}