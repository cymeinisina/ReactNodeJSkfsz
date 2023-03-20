import React from 'react';
import { connect } from 'dva';
import { Input, Button } from 'antd';

@connect(({ createTopic }) => ({
    createTopic
}))
export default class CreateTopic extends React.Component {
    onChange(type, value) {
        let payload = {};
        payload[type] = value.target.value;
        this.props.dispatch({
            type: 'createTopic/overrideStateProps',
            payload
        })
    }
    create() {
        this.props.dispatch({
            type: 'createTopic/create',
        })
    }
    render() {
        const { createTopic } = this.props;
        const { title, content } = createTopic;
        return (
            <div>
                title <Input
                    onChange={this.onChange.bind(this, 'title')}
                    value={title}
                />
                content <Input.TextArea
                    onChange={this.onChange.bind(this, 'content')}
                    value={content}
                />
                <Button onClick={this.create.bind(this)}> submit </Button>
            </div>
        );
    }
}