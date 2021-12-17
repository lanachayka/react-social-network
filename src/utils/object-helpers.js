export const updateObjectInArray = (items, check, objPropName, newObjProps) => {
    return items.map((item) => {
        if (item[objPropName] === check) {
            return { ...item, ...newObjProps };
        }
        return item;
    })
}
