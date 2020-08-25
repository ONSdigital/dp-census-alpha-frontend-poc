import React from 'react';
import '../styles/App.css';

export class Tab extends React.Component {

    render() {
        let tabClass = "tab"
        tabClass += this.props.active ? " tab-active" : " tab-inactive"
        if (this.props.inPage){
            tabClass += " selected-tab-border"
        }
        let tabButtonClass = "tab-button"
        tabButtonClass += this.props.active ? " tab-button-active" : " tab-button-inactive"
        return <div className={tabClass}>
            <button className={tabButtonClass}
                    onClick={() => {
                        this.props.changeTab(this.props.name)
                    }}>{`${this.props.name} (${this.props.count})`}</button>
        </div>
    }
}
