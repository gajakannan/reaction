'use strict';

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class App {
  constructor() {

    var bodyDOMElement = document.getElementsByTagName('body')[0];

    // var Profile,
    //     Nav = React.createClass({}),
    //     nav = <Nav color="blue"><Profile>click</Profile></Nav>;
    //
    // body.append(nav);

    // var Form = React.createClass({});
    //     Form.Row = React.createClass({});
    //     Form.Label = React.createClass({});
    //     Form.Input = React.createClass({});
    // var form = (
    //
    //     <Form>
    //       {/* It's okay to put comments in here as long as you enclose them in curly braces. */}
    //       <Form.Row /* Comments in here
    //                    on the other hand
    //                    are fine without
    //                    curly braces. */>
    //         <Form.Label />
    //         <Form.Input />
    //       </Form.Row>
    //     </Form>
    // );
    //
    // body.append(form);

    // var Input = React.createClass({}),
    //     firstDisabledInput = <Input type="button" disabled />,
    //     secondDisabledInput = <Input type="button" disabled={true} />,
    //     firstEnabledInput = <Input type="button" />,
    //     secondEnabledInput = <Input type="button" disabled={false} />;
    //
    // body.append(firstDisabledInput);
    // body.append(secondDisabledInput);
    // body.append(firstEnabledInput);
    // body.append(secondEnabledInput);

    // var Person = React.createClass({}),
    //     person = <Person name={window.isLoggedIn ? window.name : ''} />;
    //
    // body.append(person);

    // var Nav = React.createClass({}),
    //     Login = React.createClass({}),
    //     Container = React.createClass({}),
    //     container = <Container>{!window.isLoggedIn ? <Nav /> : <Login />}</Container>;
    //
    // body.append(container);

    // var Comment = React.createClass({
    //   render: function() {
    //     return (
    //       <div className="comment">
    //         <h2>
    //           {this.props.author}
    //         </h2>
    //         {this.props.children}
    //       </div>
    //     );
    //   },
    //   componentDidMount: function() {
    //     console.log(this.props.author + '\'s comment mounted')
    //   }
    // });

    // var CommentList = React.createClass({
    //   render: function() {
    //     var comments = this.props.data.map(function(comment) {
    //       return (
    //         <Comment author={comment.author} key={comment.id}>
    //           {comment.text}
    //         </Comment>
    //       );
    //     });
    //
    //     return (
    //       <div className="commentList">
    //         {comments}
    //       </div>
    //     );
    //   },
    //   componentDidMount: function() {
    //     console.log('The comment list component mounted')
    //   }
    // });

    var CommentList = React.createClass({
      render: function() {
        return (
          <div className="commentList"> </div>
        );
      }
    });

    var CommentBox = React.createClass({});

    var commentBox = (

      <div className="commentBox">
        <CommentList />
      </div>
    );

    ReactDOM.render(commentBox, bodyDOMElement);

    // var StatefulDiv = React.createClass({
    //   getInitialState: function() {
    //     var title = "Hello world...",
    //         initialState = {
    //           title: title
    //         };
    //
    //     return initialState;
    //   },
    //   render: function() {
    //     return (
    //       <div>
    //         <h2>
    //           {this.state.title}
    //         </h2>
    //         <p>
    //           {this.props.message}
    //         </p>
    //       </div>
    //     );
    //   },
    //   componentDidMount: function() {
    //     console.log('the stateful div mounted')
    //   }
    // });
    //
    // var statefulDiv = <StatefulDiv message="Another message..."/>;
    //
    // ReactDOM.render(statefulDiv, bodyDOMElement);
    //
    // var title = "Hello world again!",
    //     state = {
    //       title: title
    //     };
    //
    // statefulDiv.setState(state);
  }
}

module.exports = App;
