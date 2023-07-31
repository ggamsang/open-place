import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as appPropTypes from './appPropTypes';
import Peer from './PeerMobile';
import styled from 'styled-components';
const WIDTH = (window.innerWidth - 20) / 2;

const DivPeer = styled.div`
	margin: 0;
	width: ${WIDTH}px;
	height: ${WIDTH}px;
	border: 1px solid transparent;
	&.active {
		border: 1px solid white;

	}
	cursor: default;
`;

const Peers = ({ pinned, clicked, member, peers, activeSpeakerId }) => {
	return (
		// <DivPeers>
		// {
		peers.map((peer) => {
			// console.log(peer);
			return (
				<DivPeer
					style={{ border: `${pinned == peer.id ? "1px solid red" : "1px solid transparent"}` }}
					className={`${peer.id === activeSpeakerId ? 'active' : ""}`}
					key={peer.id}>
					<Peer
						clicked={clicked}
						info={member.find(mem => mem.user_id === parseInt(peer.id, 10))}
						id={peer.id} />
				</DivPeer>
			);
		})
		// }
		// </DivPeers>
	);
};

Peers.propTypes =
{
	peers: PropTypes.arrayOf(appPropTypes.Peer).isRequired,
	activeSpeakerId: PropTypes.string
};

const mapStateToProps = (state) => {
	const peersArray = Object.values(state.peers);

	return {
		peers: peersArray,
		activeSpeakerId: state.room.activeSpeakerId
	};
};

const PeersContainer = connect(
	mapStateToProps,
	null,
	null,
	{
		areStatesEqual: (next, prev) => {
			return (
				prev.peers === next.peers &&
				prev.room.activeSpeakerId === next.room.activeSpeakerId
			);
		}
	}
)(Peers);

export default PeersContainer;