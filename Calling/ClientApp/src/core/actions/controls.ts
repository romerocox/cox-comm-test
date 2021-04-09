const SET_MIC = 'SET_MIC';
const SET_CAMERA = 'SET_CAMERA';
const SET_SHARE_SCREEN = 'SET_SHARE_SCREEN';

interface SetMicAction {
  type: typeof SET_MIC;
  mic: boolean;
}

interface SetCameraAction {
  type: typeof SET_CAMERA;
  camera:  boolean;
}

interface SetShareScreenAction {
  type: typeof SET_SHARE_SCREEN;
  shareScreen: boolean;
}

export const setMic = (mic: boolean): SetMicAction => {
  return {
    type: SET_MIC,
    mic
  };
};

export const setCamera = (camera: boolean): SetCameraAction => {
  return {
    type: SET_CAMERA,
    camera
  }
}

export const setShareScreen = (shareScreen: boolean): SetShareScreenAction => {
  return {
    type: SET_SHARE_SCREEN,
    shareScreen
  };
};

export { SET_MIC, SET_CAMERA, SET_SHARE_SCREEN };

export type ControlTypes = SetMicAction | SetCameraAction | SetShareScreenAction;
