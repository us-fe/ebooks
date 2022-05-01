
function makeSidebar(data) {
    return Object.keys(data)
        .reduce((pre, key) => {
            function _fn(item, prefix) {

                const newItem: {
                    text: string,
                    link?: string,
                    collapsible?: boolean,
                    children?: any[]
                } = {
                    text: item.text,

                }
                if ('collapsible' in item) {
                    newItem.collapsible = item.collapsible;
                }

                if ('link' in item) {
                    newItem.link = prefix + item.link;
                }

                if (item.children) {
                    newItem.children = item.children.map(c => {
                        return _fn(c, prefix + item.prefix);
                    })
                }

                return newItem;

            }

            return {
                [key]: data[key].map((d) => _fn(d, key)),
                ...pre,
            }

        }, {})
}


export {
    makeSidebar,
}