import React, { Component } from "react";
import styled from "styled-components";
import { FileUploadRequest, GameFileUploadRequest } from "actions/Uploader/Uploader";
import ButtonNormal from 'mobile/components_mobile/Commons/Button/ButtonNormal';
import { Dimmer, Loader } from "semantic-ui-react";
import { SPLITOR } from "constant";

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
            status: 0, // 0 not yet, 1 single, 2 multiple, 3 uploading, 4 completed.
            loading: null,
            files: this.props.files === null ? [] : this.props.files,
        }
        this.onFileChange = this.onFileChange.bind(this);
        this.returnData = this.returnData.bind(this);
        this.onClickRemove = this.onClickRemove.bind(this);
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.files) !== JSON.stringify(this.props.files)) {
            this.setState({
                files: [].concat(this.props.files)
            })
        }
    }
    onFileChange = async objFiles => {
        const files = Object.values(objFiles);
        if (files.length === 0) {
            return;
        }
        if (files.filter(file => file.name === "index.html").length === 0) {
            alert('there is no index.html');
            return;
        }
        await this.setState({ loading: "파일을 등록하고 있는 중입니다." });
        const { v4: uuidv4 } = require('uuid');
        const folder = uuidv4();
        Promise.all(
            files.map(file =>
                GameFileUploadRequest(file,
                    encodeURIComponent(`${folder}/${file.webkitRelativePath || "index.html"}`))
                    .then(webfile => ({ path: webfile.path, name: file.name })))
        ).then(list =>// console.log("game: changed aaa", list));
            list.filter(item => item.name === "index.html")
        ).then(obj => this.setState({ files: obj },
            async () => await this.returnData()));

        await this.setState({ loading: null });

        // await this.setState({ loading: "파일을 등록하고 있는 중입니다." });
        // Promise.all(
        //     files.map(file =>
        //         GameFileUploadRequest(file)
        //             .then(url => ({
        //                 name: file.name,
        //                 path: file.webkitRelativePath,
        //                 url: url.path,
        //                 id: url.id
        //             }))))
        //     .then(list =>
        //         list.map(item =>
        //             JSON.stringify(item)).join(SPLITOR))
        //     .then(serialized =>
        //         serialized.split('⛏').map(item => JSON.parse(item)))
        //     .then(obj => this.setState({ files: obj },
        //         async () => await this.returnData()))
        // await this.setState({ loading: null });
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
        const { status } = this.state;

        return (<React.Fragment>
            <Wrapper>
                {this.state.loading
                    ? <Dimmer>
                        <Loader>{this.state.loading}</Loader>
                    </Dimmer>
                    : null}
                <div className="addfile"
                    style={{ display: `${this.props.display === true ? "block" : "none"}` }}>
                    {this.state.status === 1 &&
                        <input hidden id="addfile" type="file"
                            name="source"
                            ref={ref => (this.input = ref)}
                            onChange={e => this.onFileChange(e.target.files)}
                            accept={`.${this.props.accept}`}
                        />}
                    {this.state.status === 2 &&
                        <input hidden id="addfile" type="file"
                            name="source"
                            ref={ref => (this.input = ref)}
                            onChange={e => this.onFileChange(e.target.files)}
                            directory=""
                            webkitdirectory=""
                        />}
                    <label htmlFor="addfile"
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                        <ButtonNormal
                            onClick={() => this.setState({ status: 1 })}
                            height={30}
                            width={170}
                            radius={10}
                            fontSize={15}
                            color={"red"}
                            bgColor={"#E7E7E7"}
                            text="파일등록" />
                        <ButtonNormal
                            onClick={() => this.setState({ status: 2 })}
                            height={30}
                            width={170}
                            radius={10}
                            fontSize={15}
                            color={"red"}
                            bgColor={"#E7E7E7"}
                            text="폴더등록" />
                    </label>
                </div>
                {/* {this.state.files.length > 0 &&
                    <div className="filelist">
                        {this.state.files.map((item, index) => {
                            return (
                                <div className="piece" key={index}>
                                    <div onClick={() => window.location.href = item.url} className="file_name">{item.name}</div>
                                    <div style={{ display: `${this.props.display === true ? "flex" : "none"}` }} onClick={this.onClickRemove}>x</div>
                                </div>
                            )
                        })}
                    </div>} */}
            </Wrapper>
        </React.Fragment >);
    }
};