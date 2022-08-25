import React, { Component } from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceryItems: [
                { id: 1, title: "Mango" },
                { id: 2, title: "Guayaba" },
                { id: 3, title: "Manzana" },
                { id: 4, title: "Anon" },
                { id: 5, title: "Coco" }
            ],
            shoppingListItems: [
                { id: 4, title: "Onions", amount: 1 },
                { id: 5, title: "Leeks", amount: 2 },
            ],
        };

    }
    onItemClick(item) {
        console.log(`Clicked ${item.id}: ${item.title}`);
    }
    render() {

        const ItemList = this.state.groceryItems.map((item) => (
            <ListItem
                key={item.id}
                item={item}
                clickItem={() => this.onItemClick(item)}
            />))
        return (
            <div>
                {ItemList}
            </div>
        )
    }
}

export default List;