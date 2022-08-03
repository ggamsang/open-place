import React, { Component } from "react";
import JoditEditor from "jodit-react";

// export const Editor = ({config,value,onChange})=>{
//     const editor = useRef(null);
//     const [text,onChangeText] = useState("");
//     const handleChangeContent = async(content) =>{
//         await onChange(content);
//     }
//     return(
//         <JoditEditor
//             ref = {editor}
//             config={config}
//             onChange={newContent=>handleChangeContent(newContent)}
//             value={value}
//         />
//     )
// }


class Jodit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      })
    }
  }
  handleChangeContent = async (content) => {
    await this.props.onChange(content);
  }
  render() {
    const { config } = this.props;
    return (
      <JoditEditor
        config={config}
        onChange={async newContent => await this.handleChangeContent(newContent)}
        value={this.state.value}
      />
    )
  }
}
export default Jodit;