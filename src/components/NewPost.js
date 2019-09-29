import React from 'react'

class NewPost extends React.Component {

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault();
  }

  render () {
    return <div>
      <h1>New Post</h1>
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" name="name" placeholder="Title" 
          value={null} onChange={this.handleChange}
        />
        <textarea name="content" placeholder="Content"
          value={null} onChange={this.handleChange}
        />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  }
}

export default NewPost