'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

const positions_hospital = [
  {
    title: '녹색친구들 마곡',
    latlng: { lat: 37.5679745986878, lng: 126.826720979429 },
  },
  {
    title: '나루이비인후과의원',
    latlng: { lat: 37.5671331, lng: 126.8271854 },
  },
  {
    title: '오율의원 마곡본점',
    latlng: { lat: 37.5677914, lng: 126.8248306 },
  },
  {
    title: '웰튼병원',
    latlng: { lat: 37.5671944, lng: 126.8252269 },
  },
  {
    title: '보타닉치과의원',
    latlng: { lat: 37.5682141, lng: 126.8262718 },
  },
  {
    title: '친절한 홍치과의원',
    latlng: { lat: 37.5673140391214, lng: 126.827554917518 },
  },
];

const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current && !map) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(37.5679366832222, 126.826732160088),
            level: 3,
          };
          const newMap = new window.kakao.maps.Map(mapRef.current, mapOption);
          setMap(newMap);

          // 마커 이미지 설정
          const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
          const imageSize = new window.kakao.maps.Size(24, 35);
          const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

          // 여러 개의 마커 생성
          positions_hospital.forEach((position) => {
            const marker = new window.kakao.maps.Marker({
              map: newMap,
              position: new window.kakao.maps.LatLng(position.latlng.lat, position.latlng.lng),
              title: position.title,
              image: markerImage,
            });

            // 인포윈도우 생성
            const infowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${position.title}</div>`,
            });

            // 마커에 마우스오버 이벤트 추가
            window.kakao.maps.event.addListener(marker, 'click', () => {
              infowindow.open(newMap, marker);
            });
          });
        }
      });
    };

    mapScript.addEventListener('load', onLoadKakaoMap);

    return () => mapScript.removeEventListener('load', onLoadKakaoMap);
  }, [map]);

  useEffect(() => {
    if (map) {
      const resizeMap = () => {
        map.relayout();
      };

      window.addEventListener('resize', resizeMap);
      return () => {
        window.removeEventListener('resize', resizeMap);
      };
    }
  }, [map]);

  return <div ref={mapRef} className="h-full max-h-[500px] w-full" />;
};

export default KakaoMap;
