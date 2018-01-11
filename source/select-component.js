import React from "react";


export default class Select extends React.Component {
    getFocusHandler(name) {
        return () => {
            if (this.props[name]) {
                this.props[name]();
            }
        };
    }

    getChangeHandler() {
        return ({ target }) => {
            if (this.props.onChange) {
                this.props.onChange(this.props.items[target.selectedIndex].id);
            }
        };
    }

    toOption(item, index) {
        return <option key={`id_${index}_${item.id}`}>
            {item.value}
        </option>
    }

    render() {
        return <select onFocus={this.getFocusHandler("onFocusIn")}
                       onBlur={this.getFocusHandler("onFocusOut")}
                       onChange={this.getChangeHandler()}>
            {this.props.items.map(this.toOption)}
        </select>
    }
}
