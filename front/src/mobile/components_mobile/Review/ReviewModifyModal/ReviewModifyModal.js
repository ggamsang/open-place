import ButtonNormal from 'mobile/components_mobile/Commons/Button/ButtonNormal';
import { WIDTH } from 'constant';
import React from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import Cross from "mobile/components_mobile/Commons/Cross";
import { Rating } from 'react-simple-star-rating';
import { FileUploadRequest } from "actions/Uploads";

const Wrapper = styled.div`
    box-sizing: border-box;
    *{box-sizing: border-box;}
    padding: 10px;
    .modal-header {
        margin-bottom: 7px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .title {
        margin: auto;
        height: 19px;
        text-align: left;
        font: normal normal bold 15px/18px Noto Sans KR;
        letter-spacing: 0px;
        color: #000000;
    }
    .info {
        .item-name {
            height: 19px;
            text-align: left;
            font: normal normal normal 15px/18px Noto Sans KR;
            letter-spacing: 0px;
            color: #707070;
        }
        .info-ext {
            height: 19px;
            text-align: left;
            font: normal normal medium 15px/18px Noto Sans KR;
            letter-spacing: 0px;
            color: #000000;
        }
        .score {
            height: 20px;
        }
    }
    .image-selector {

        height: 100px;
        width: 100px;
        background-color: #E9E9E9;

        label {
            
            text-align: left;
            font: normal normal medium 13px/16px Noto Sans KR;
            letter-spacing: 0px;
            color: #707070;
        }
        margin-bottom: 10px;
    }
    .buttons {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .write-review {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        textarea {
            box-sizing: border-box;
            padding: 8px 15px;
            margin: auto;
            width: calc(100% - 0px);
            height: 188px;
            border-radius: 10px;
            background-color: #E9E9E9;
            border: none;
            resize: none;
        }
    }
    .row {
        display: flex;
        flex-direction: row;
    }
    .mini_pic_list{
        width: 200px;
        height: max-content;
        display: flex;
        overflow-x: overlay;
        overflow-y: hidden;
        ::-webkit-scrollbar-track {
            height: 4px;
            border-radius: 4px;
            background-color: #EEEEEE;
        }
        ::-webkit-scrollbar {
            height: 4px;
            background-color: #EEEEEE;
        }
        ::-webkit-scrollbar-thumb {
            height: 4px;
            border-radius: 2px;
            background-color:  #707070;
        }
    }
`;
const AddPic = styled.div`
    min-width:${props => props.width}px;
    min-height:${props => props.height}px;
    max-width:${props => props.width}px;
    max-height:${props => props.height}px;

    margin-right:${props => props.marginRight === null ? 0 : props.marginRight}px;

    background-color: #efefef;
    background-image: url(${props => props.img});
    background-size:cover;
    border-radius:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    cursor:pointer;
    border:1px solid #eaeaea;
    .deleteButton{
        display:none;
        z-index:999;
    }
    .text{
        font-size: 20px;
        color:#afafaf;
    }
    &:hover{
        .deleteButton{
            display:block;
            width:18px;
            height:18px;
            border-radius:11px;
            color:white;
            background-color:#afafaf;
            padding:4px 3px;
            position:absolute;
            right:-5px;
            top:-5px;
    
        }
    }
`;

export default class ReviewModifyModal extends React.Component {
    closeModal = () => {
        this.props.close();
    }
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            thumbnail: this.props.detail.review_image_list && this.props.detail.review_image_list.split(","),
            ...this.props.detail
            //             create_at: "2022-07-14T14:51:07.000Z"
            // exp_name: undefined
            // nick_name: "깜상"
            // option: null
            // review_image_list: "https://s3.ap-northeast-2.amazonaws.com/osd.uploads.com/dev/uploads/c0d3a03a4f41d3b662d176e8f06b9ac9"
            // score: 2
            // text: "a"
            // uid: 29
            // user_id: 10

            // files: [],
            // thumbnail: [],
            // score: 0,
            // text: "",
        }
        this.modal_option = {
            width: `${WIDTH - 30}px`,
            height: "407px",
            visible: this.props.open, effect: "fadeInUp"
        }
    }
    onCancel = () => {
        // warning: 작성한거 날아감. 오키?

        this.closeModal();
    }
    onSubmit = async () => {
        const { score, text, thumbnail, files } = this.state;
        const { expDetail, userInfo, } = this.props;

        Promise.all(

            files.map(async (item) => {
                const file = item;
                const s3path = await FileUploadRequest([file]);
                return s3path.path;
            }))

            .then(file_to_url => thumbnail
                .filter(thum => thum.includes("data:image") === false)
                .concat(file_to_url).join(","))

            .then(review_image_list => {
                console.log(review_image_list);
                const obj = {
                    user_id: userInfo.uid,
                    exp_id: expDetail.uid,
                    score: score < 6 ? score : parseInt(score / 20),
                    text: text,
                    review_image_list: review_image_list,
                };
                this.props.submit(this.props.detail.uid, obj);
            })
        // .then(alert('completed'));
    }
    onChangedRating = (star) => this.setState({ score: star });

    handleOnChangeThumbnail(event, index) {
        // event.preventDefault();
        // const reader = new FileReader();
        // const file = event.target.files[0];
        // reader.onloadend = () => {
        //     const thumbnail_url = reader.result;
        //     let file_list = this.state.files;
        //     let thumbnail_list = this.state.thumbnail.length === 0 ? "" : this.state.thumbnail;
        //     alert(thumbnail_list);
        //     thumbnail_list.splice(index, 1, thumbnail_url);
        //     file_list.splice(index, 1, file);
        //     this.setState({ thumbnail: thumbnail_list, files: file_list });
        // }
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            const thumbnail_url = reader.result;
            if (this.state.thumbnail && this.state.thumbnail.length <= 0) {
                this.setState({ thumbnail: this.state.thumbnail.concat(thumbnail_url), files: this.state.files.concat(file) });
            } else {
                let thumbnail_list = typeof this.state.thumbnail === "object" ? this.state.thumbnail : this.state.thumbnail.split(",");
                let file_list = this.state.files;
                thumbnail_list.splice(index, 1, thumbnail_url);
                file_list.splice(index, 1, file);
                this.setState({ thumbnail: thumbnail_list, files: file_list });
            }
        }
        if (event.target.files[0]) {
            reader.readAsDataURL(file);
        }
    };

    render() {
        const { expDetail } = this.props;
        let imgCount = 0;
        console.log("gosleep", this.props);
        return (
            <Modal {...this.modal_option} onClickAway={() => alert('?')}>
                <Wrapper>
                    <div className='modal-header row'>
                        <div className='title'>리뷰 등록</div>
                        <div className='close'>
                            <button style={{ border: "none", outline: "none", backgroundColor: "transparent" }} onClick={() => this.closeModal()}>
                                <Cross
                                    angle={45}
                                    color={"gray"}
                                    weight={5}
                                    width={20}
                                    height={20} />
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        {/* images */}
                        <div className="mini_pic_list">
                            {this.state.thumbnail &&
                                this.state.thumbnail.length > 0 ?
                                this.state.thumbnail.map((item, index) =>
                                    <React.Fragment>
                                        <input hidden onChange={(event) => this.handleOnChangeThumbnail(event, index)} id={`file${index}`} type="file" accept="image/*" />
                                        <label onClick={() => { console.log(imgCount) }} htmlFor={`file${index}`}>
                                            <AddPic key={index} width={100} height={100} marginRight={15} img={item}>
                                                <div className="deleteButton"
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        let copy = [...this.state.thumbnail];
                                                        copy.splice(index, 1);
                                                        await this.setState({ thumbnail: copy });
                                                    }}
                                                ><Cross angle={45} color={"white"} weight={2} width={10} height={10} /></div>
                                            </AddPic>
                                        </label>
                                    </React.Fragment>
                                ) : null}

                            {this.state.thumbnail &&
                                this.state.thumbnail.length >= 5 ?
                                null
                                :
                                <React.Fragment>
                                    <input hidden
                                        onChange={(event) =>
                                            this.handleOnChangeThumbnail(event,
                                                this.state.thumbnail && this.state.thumbnail.length < 0
                                                    ? 0
                                                    : this.state.thumbnail.length)}
                                        id={`addfile`}
                                        type="file"
                                        accept="image/*" />
                                    <label htmlFor={`addfile`}>
                                        <AddPic width={100} height={100} marginRight={15}>
                                            {/* <div className="deleteButton">
                                                <Cross angle={45} color={"white"} weight={2} width={10} height={10} />
                                            </div> */}
                                            <div className="text">+</div>
                                            <div>사진 추가하기</div>
                                        </AddPic>
                                    </label>
                                </React.Fragment>}

                        </div>
                        {/* info */}
                        <div className='info'>
                            <div className='item-name'>{expDetail.title || "아이템이름"}</div>
                            <div className='info-ext'>{expDetail.option || ""}</div>
                            <div className='score'>
                                <Rating
                                    initialValue={this.state.score}
                                    onClick={this.onChangedRating}
                                    size="20"
                                    stye={{ width: "112px", height: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className='write-review'>
                        <textarea
                            id="text"
                            onChange={e => this.setState({ text: e.target.value })}
                            value={this.state.text}
                            placeholder='리뷰를 작성해주세요.' />
                    </div>
                    <div className='buttons'>
                        <ButtonNormal
                            onClick={() => this.onSubmit()}
                            style={{
                                width: "140px",
                                height: "35px",
                                background: "#FF0000 0% 0 % no-repeat padding-box",
                                boxShadow: "2px 2px 3px #00000019",
                                borderRadius: "10px",
                                color: "white",
                                backgroundColor: "red",
                            }} text={"작성완료"} />

                        <ButtonNormal
                            onClick={() => this.onCancel()}
                            style={{
                                width: "140px",
                                height: "35px",
                                background: "#707070 0% 0% no-repeat padding-box",
                                boxShadow: "2px 2px 3px #00000019",
                                borderRadius: "10px",
                                marginLeft: "auto",
                                color: "white",
                                backgroundColor: "gray",
                            }} text={"취소"} />
                    </div>
                </Wrapper>
            </Modal>
        );
    }
}