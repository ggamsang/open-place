import React, { Component } from "react";
import styled from "styled-components";
import { GameFileUploadRequest } from "actions/Uploader/Uploader";
import InputNormal from 'components_mobile/Commons/Input/InputNormal';
import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { Dimmer, Loader } from "semantic-ui-react";
import JSZip from "jszip";

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
            border-radius:5px;
            border:1px solid #eaeaea;
            padding:3px;
            display:flex;
            justify-content:space-between;
            font-size:11px;
            color:#707070;
        }
    }
`;

export class InputGameFile extends Component {

    constructor(props) {
        super(props);
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
        const file = files[0];
        console.log(files);
        // check type
        // if (file.type === "application/zip") {
        //     console.log("JSZIP")
        //     JSZip.loadAsync(file)
        //         .then(zip => { console.log(zip) })
        //         .catch(e => console.error(e));
        //     // var new_zip = new JSZip();
        //     // // more files !
        //     // new_zip.loadAsync(content)
        //     // .then(function(zip) {
        //     //     // you now have every files contained in the loaded zip
        //     //     zip.file("hello.txt").async("string"); // a promise of "Hello World\n"
        //     // });
        // }
        // if (file.type === "text/html") {
        //     if (file.name !== "index.html") {
        //         alert("index.html 파일을 선택하여 주세요.");
        //         return;
        //     }
        // }
        // type: "application/zip" type: "text/html" name: "index.html"
        // check index.html in here.
        // console.log(files);
        return;
        // await this.setState({ loading: "파일을 등록하고 있는 중입니다." });
        const s3path = await GameFileUploadRequest(file);
        console.log({ s3path });
        return;
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
        return (<React.Fragment>
            <Wrapper>
                {this.state.loading
                    ? <Dimmer>
                        <Loader>{this.state.loading}</Loader>
                    </Dimmer>
                    : null}
                <div className="addfile"
                    style={{ display: `${this.props.display == true ? "block" : "none"}` }}>
                    <input hidden id="addfile" type="file"
                        name="source"
                        ref={ref => (this.input = ref)}
                        onChange={e => this.onFileChange(e.target.files)}
                        accept={`.${this.props.accept}`}
                        directory="" webkitdirectory=""
                    />
                    <label htmlFor="addfile" >
                        <ButtonNormal
                            height={30}
                            radius={10}
                            fontSize={15}
                            color={"red"}
                            bgColor={"#F7F7F7"}
                            text="게임 파일 등록" />
                    </label>
                </div>
                {this.state.files.length > 0 &&
                    <div className="filelist">
                        {this.state.files.map((item, index) => {
                            return (
                                <div className="piece" key={index}>
                                    <div onClick={() => window.location.href = item.file_url} className="file_name">{item.filename}</div>
                                    <div style={{ display: `${this.props.display == true ? "flex" : "none"}` }} onClick={this.onClickRemove}>x</div>
                                </div>
                            )
                        })}
                    </div>}
            </Wrapper>
        </React.Fragment>);
    }
};