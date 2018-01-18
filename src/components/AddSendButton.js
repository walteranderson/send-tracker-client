import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import DialogContainer from 'react-md/lib/Dialogs';
import TextField from 'react-md/lib/TextFields';
import FontIcon from 'react-md/lib/FontIcons';

class AddSendButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogVisible: false,
      comments: ''
    };
  }

  onCommentsChange = (comments) => this.setState({ comments });

  showConfirmation = () => {
    this.setState({ dialogVisible: true });
  }

  hideConfirmation = () => {
    this.setState({
      dialogVisible: false,
      comments: ''
    });
  }

  submit = () => {
    const { grade } = this.props;
    const { comments } = this.state;

    this.props.submitHandler({
      grade: grade.id,
      comments
    });
    this.hideConfirmation();
  }

  render() {
    const { dialogVisible, comments } = this.state;
    const { grade } = this.props;

    const actions = [
      <Button flat secondary onClick={ this.hideConfirmation }>Cancel</Button>,
      <Button flat primary onClick={ this.submit }>Submit</Button>
    ];

    const iconStyles = {
      backgroundColor: grade.color,
      fontSize: '35px',
      color: 'transparent',
      width: '35%'
    };

    return (
      <div style={{ display: 'inline-block' }}>
        <Button
          raised
          iconEl={ <FontIcon style={iconStyles}>brightness_1</FontIcon> }
          style={{ margin: '6px 4px', padding: 0 }}
          onClick={ this.showConfirmation }>
            <span>{ grade.label }</span>
        </Button>

        <DialogContainer
          title='Confirm Send'
          actions={ actions }
          visible={ dialogVisible }
          onHide={ this.hideConfirmation }
          id={ `confirmation-dialog-${grade.id}` }>
            <TextField
              rows={ 2 }
              id='comments'
              value={ comments }
              onChange={ this.onCommentsChange }
              label='Comments'
            />
        </DialogContainer>
      </div>
    );
  }
}

export default AddSendButton;
