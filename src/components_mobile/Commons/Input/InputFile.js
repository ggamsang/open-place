import React, { Component } from "react";
import styled from "styled-components";
import { FileUploadRequest } from "actions/Uploader/Uploader";
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';

const Wrapper = styled.div`
    width:100%;
    .addfile{
        width:100%;
    }
    .filelist{
        width:100%;
        border-radius:10px;
        background-color:#F7F7F7;
        box-sizing:border-box;
        padding:10px;
        margin-top:10px;
        .piece{
            margin-bottom:3px;
            border-radius:5px;
            border:1px solid #eaeaea;
            padding:3px;
            display:flex;
            justify-content:space-between;
            font-size:11px;
            color:#707070;
        }
    }

`
// const Wrapper = styled.div`
//     margin-top:10px;
//     width:100%;
//     .row_{
//         display:flex;
//         justify-content:space-between;
//     }
// `
// const Files = styled.div`
//     width:100%;
//     .fileRow{
//         box-sizing:border-box;
//         background-color:rgba(255,255,255,0.5);
//         border:1px solid white;
//         width:100%;
//         padding:3px;
//         display:flex;
//         align-items:center;
//         justify-content:space-between;
//         .file_name{
//             font-size:9px;
//             color:#707070;
//         }
//         .close_btn{
//             width:20px;
//             font-size:12px;
//             color:#707070;
//         }
//     }
// `

export class InputFile extends Component {

    constructor(props) {
        super(props);
        // this.state = { file: { file_url: "", filename: "" }, value: "선택된 파일 없음" };
        this.state = {
            loading: "",
            files: this.props.files == null ? [] : this.props.files,
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.returnData = this.returnData.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.files) != JSON.stringify(this.props.files)) {
            this.setState({
                files: [].concat(this.props.files)
            })
        }
    }
    onFileChange = async files => {
        if (files.length === 0) {
            return;
        }
        await this.setState({ loading: "파일을 등록하고 있는 중입니다." });
        const file = files;
        const s3path = await FileUploadRequest(file);
        await this.setState({
            loading: "",
            files: await this.state.files.concat({
                file_id: s3path.id,
                file_url: s3path.path,
                filename: file[0].name
            })
        }, async () => await this.returnData())
    }
    returnData = async e => {
        this.props.getValue
            && await this.props.getValue(this.state.files);
    }
    init = async () => {
        await this.returnData();
    }
    onClickRemove = async (event) => {
        let copy = [...this.state.files];
        copy.splice(event.target.id, 1);
        await this.setState({ files: copy });
        await this.returnData();
    }
    render() {
        return (
            <React.Fragment>
                <Wrapper>
                    <div className="addfile" style={{ display: `${this.props.display == true ? "block" : "none"}` }}>
                        <input hidden id="addfile" type="file" name="source" ref={ref => (this.input = ref)} onChange={e => this.onFileChange(e.target.files)} accept={`.${this.props.accept}`} />
                        <label htmlFor="addfile" >
                            <ButtonNormal
                                height={30}
                                radius={10}
                                fontSize={15}
                                color={"red"}
                                bgColor={"#F7F7F7"}
                                text="파일 등록" />
                        </label>
                    </div>
                    {this.state.files.length > 0 &&
                        <div className="filelist">
                            {
                                this.state.files.map((item, index) => {
                                    return (
                                        <div className="piece" key={index}>
                                            <div onClick={() => window.location.href = item.file_url} className="file_name">{item.filename}</div>
                                            <div style={{ display: `${this.props.display === true ? "flex" : "none"}` }} onClick={this.onClickRemove}>x</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </Wrapper>
            </React.Fragment>
        );
    }
}


{/* <Wrapper style={this.props.style}>
                    <div className="row_">
                        {this.state.loading}
                    </div>
                    <Files>
                        {
                            this.state.files&&
                            this.state.files.map((item,index)=>{
                                return(
                                    <div className="fileRow" key={index}>
                                        <div onClick={()=>window.location.href=item.file_url} className="file_name">{item.filename}</div>
                                        <div id={index}  style={{display:`${this.props.display==true?"flex":"none"}`}} className="close_btn" onClick={this.onClickRemove}>X</div>
                                    </div>
                                )
                            })
                        }
                    </Files>
                    <div className="row_" style={{marginTop:"10px",display:`${this.props.display==true?"flex":"none"}`}}>
                            <input hidden id="addfile" type="file" name="source" ref={ref => (this.input = ref)} onChange={e => this.onFileChange(e.target.files)} accept={`.${this.props.accept}`} />
                            <InputNormal
                                onChangeValue={this.onChangeValue}
                                value={this.state.value}
                                placeholder={"파일 이름"}
                                disable={true}
                                width={220}
                                height={25} fontSize={14} color={"#EAF2FE"} radius={3} />
                            <label htmlFor="addfile">
                                <ButtonNormal
                                    style={{ minWidth: "80px" }}
                                    width={80}
                                    height={25}
                                    radius={10}
                                    fontSize={15}
                                    color={"red"}
                                    bgColor={"white"}
                                    border={"2px solid red"}
                                    text="파일 등록" />
                            </label>
                    </div>
                </Wrapper> */}