import ButtonNormal from 'components_mobile/Commons/Button/\bButtonNormal';
import { WIDTH } from 'constant';
import React from 'react';
import Modal from 'react-awesome-modal';
import styled from 'styled-components';
import Cross from "components_mobile/Commons/Cross";
import { Rating } from 'react-simple-star-rating';

const Wrapper = styled.div`
    box-sizing: border-box;
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
            // height: 16px;
            text-align: left;
            font: normal normal medium 13px/16px Noto Sans KR;
            letter-spacing: 0px;
            color: #707070;
        }

        margin-bottom: 10px;
    }
    .buttons {
        margin: auto;
        margin-top: 28px;
        width: max-content;
        display: flex;
        flex-direction: row;
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
`;
// const AddPic = styled.div`
//     min-width:${props => props.width}px;
//     min-height:${props => props.height}px;
//     max-width:${props => props.width}px;
//     max-height:${props => props.height}px;

//     margin-right:${props => props.marginRight == null ? 0 : props.marginRight}px;

//     background-color: #efefef;
//     background-image: url(${props => props.img});
//     background-size:cover;
//     border-radius:10px;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     align-items:center;
//     position:relative;
//     cursor:pointer;
//     border:1px solid #eaeaea;
//     .deleteButton{
//         display:none;
//         z-index:999;
//     }
//     .text{
//         font-size: 20px;
//         color:#afafaf;
//     }
//     &:hover{
//         .deleteButton{
//             display:block;
//             width:18px;
//             height:18px;
//             border-radius:11px;
//             color:white;
//             background-color:#afafaf;
//             padding:4px 3px;
//             position:absolute;
//             right:-5px;
//             top:-5px;
    
//         }
//     }
// `;
export default class ReviewWriteModal extends React.Component {
    closeModal = () => {
        this.props.close();
    }
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            thumbnail: [],
            score: 0,
            text: "",
        }
        this.modal_option = {
            width: `${WIDTH - 30}px`,
            height: "407px",
            visible: this.props.open, effect: "fadeInUp"
        }
    }
    onSubmit = () => {
        const { score, text, /*thumbnail*/ } = this.state;
        const { expDetail, userInfo, } = this.props;
        const obj = { user_id: userInfo.uid, exp_id: expDetail.uid, score: parseInt(score / 20), text: text };
        this.props.submit(obj);
    }
    onChangedRating = (star) => this.setState({ score: star });

    handleOnChangeThumbnail(event, index) {
        event.preventDefault();
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            const thumbnail_url = reader.result;
            if (this.state.thumbnail && this.state.thumbnail.length <= 0) {
                this.setState({ thumbnail: this.state.thumbnail.concat(thumbnail_url), files: this.state.files.concat(file) });
            } else {
                console.log(index);
                let thumbnail_list = this.state.thumbnail;
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
        // const { files } = this.state;

        return (
            <Modal {...this.modal_option} onClickAway={()=>alert('?')}>
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

                        {/* info */}
                        <div className='info'>
                            <div className='item-name'>아이템이름</div>
                            <div className='info-ext'>추가정보</div>
                            <div className='score'>
                                <Rating
                                    onClick={this.onChangedRating}
                                    size="20"
                                    stye={{ width: "112px", height: "20px" }} />
                            </div>
                        </div>
                    </div>
                    <div className='write-review'>
                        <textarea id="text" onChange={e => this.setState({ text: e.target.value })} value={this.state.text} placeholder='리뷰를 작성해주세요.' />
                    </div>
                    <div className='buttons'>
                        <ButtonNormal
                            onClick={() => this.onSubmit()}
                            style={{
                                width: "155px",
                                height: "35px",
                                background: "#FF0000 0% 0 % no-repeat padding-box",
                                boxShadow: "2px 2px 3px #00000019",
                                borderRadius: "10px",
                                color: "white",
                                backgroundColor: "red",
                            }} text={"작성완료"} />

                        <ButtonNormal style={{
                            width: "155px",
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



// {this.state.thumbnail &&
    //     this.state.thumbnail.length > 0 &&
    //     <div style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         width: "100px",
    //         height: "100px",
    //         overflow: "hidden",
    //         position: "relative"
    //     }}>
    //         <div style={{
    //             position: "absolute",
    //             top: "0",
    //             bottom: "-15px",
    //             left: "0",
    //             right: "0",
    //             overflow: "hidden",
    //             overflowX: "scroll"
    //         }}>
    //             {this.state.thumbnail.map((item, index) =>
    //                 <React.Fragment>
    //                     <input hidden onChange={(event) => this.handleOnChangeThumbnail(event, index)} id={`file${index}`} type="file" accept="image/*" />
    //                     <label htmlFor={`file${index}`}>
    //                         <AddPic key={index} width={100} height={100} marginRight={15} img={item}>
    //                             <div className="deleteButton"
    //                                 onClick={async (e) => {
    //                                     e.preventDefault();
    //                                     let copy = [...this.state.thumbnail];
    //                                     copy.splice(index, 1);
    //                                     await this.setState({ thumbnail: copy });
    //                                 }}
    //                             >
    //                                 <Cross angle={45} color={"white"} weight={2} width={10} height={10} />
    //                             </div>
    //                         </AddPic>
    //                     </label>
    //                 </React.Fragment>)}
    //         </div>
    //     </div>}
    
    // {this.state.thumbnail &&
    //     this.state.thumbnail.length < 2 &&
    //     <React.Fragment>
    //         <input hidden
    //             onChange={(event) => this.handleOnChangeThumbnail(event, this.state.thumbnail && this.state.thumbnail.length < 0 ? 0 : this.state.thumbnail.length)}
    //             id={`addfile`} type="file" accept="image/*" />
    //         <label htmlFor={`addfile`}>
    //             <AddPic width={100} height={100} marginRight={15}>
    //                 {/* <div className="deleteButton"><Cross angle={45} color={"white"} weight={2} width={10} height={10} /></div> */}
    //                 <div className="text">+</div>
    //                 <div>사진 추가하기</div>
    //             </AddPic>
    //         </label>
    //     </React.Fragment>}
    
    // {/* 
    // <label htmlFor='add-image' className='image-selector'>
    //     <input type="file" id="add-image" hidden />
    //     {files && files}<img />
    // </label> 
    // */}