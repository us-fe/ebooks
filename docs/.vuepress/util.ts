

function makeSidebar(data, prefix, maxDepth = 10) {
    function _fn(item, prefix, depth) {

        const newItem: {
            text: string,
            link?: string,
            collapsible?: boolean,
            children?: any[]
        } = {
            text: item.text,
        }

        if (depth < maxDepth) {
            if ('collapsible' in item) {
                newItem.collapsible = item.collapsible;
            }
        }


        if ('link' in item) {
            newItem.link = prefix + item.link;
        }

        if (item.children && depth < maxDepth) {
            newItem.children = item.children.map(c => {
                return _fn(c, prefix + item.prefix, depth + 1);
            })
        }

        return newItem;

    }

    return data.map((d) => _fn(d, prefix, 1));


}


function makeNavbar(data, prefix) {
    function _fn(item, prefix, depth) {

        const newItem: {
            text: string,
            link?: string,
        } = {
            text: item.text,
        }



        if ('link' in item) {
            newItem.link = prefix + item.link;
        } else {
            if ('prefix' in item) {
                newItem.link = prefix + item.prefix;
            }
        }




        return newItem;

    }

    return data.map((d) => _fn(d, prefix, 1));


}



export {
    makeSidebar,
    makeNavbar
}