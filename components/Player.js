import {useState} from "react";
import useSpotify from './../hooks/useSpotify';
import { useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState} from './../atoms/songAtom';
import useSongInfo from "../hooks/useSongInfo";

function Player(){
    const spotifyApi = useSpotify();
    const {data: session, status} = useSession();
    const [currentTrackId, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);
    const songInfo = useSongInfo();

    return <div>
        {/*Left*/}
        <div>
            <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0]?.url} alt=""></img>
        </div>
        {/*Center*/}
        <div></div>
        {/*Right*/}
        <div></div>

    </div>
}
export default Player