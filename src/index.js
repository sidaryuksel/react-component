import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                <h4>Warning!</h4>

                    Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Liloy"
                    content="Hi there"
                    timer="Today at 18:00pm"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Yusuf"
                    content="Anything we want"
                    timer="Today at 7:00pm"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Taha"
                    content="Anyway"
                    timer="Today at 9:00pm"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

    )
}

ReactDOM.render(<App />, document.querySelector('#root'));