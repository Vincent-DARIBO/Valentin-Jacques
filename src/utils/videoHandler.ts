export function pauseVideo(id: string) {
  console.log("pausing video", { id });
  const iframe = document.getElementById(id)?.contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
    "*"
  );
}

export function playVideo(id: string) {
  console.log("playing video", { id });

  const iframe = document.getElementById(id)?.contentWindow;
  iframe.postMessage(
    '{"event":"command","func":"' + "playVideo" + '","args":""}',
    "*"
  );
}
