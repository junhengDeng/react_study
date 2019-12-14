import React, { Component, Fragment } from 'react'

class Xiaojiejie extends Component {
    //js的构造函数，由于其他任何函数执行
    constructor(props) {
        super(props) //调用父类的构造函数，固定写法
        this.state = {
            inputValue: '', // input中的值
            list: ['基础按摩', '精油推背']    // 服务列表
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index + item}
                                    onClick={this.deleteItem.bind(this, index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    inputChange(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }
}

export default Xiaojiejie