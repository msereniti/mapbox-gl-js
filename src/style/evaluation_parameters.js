// @flow

import {isStringInSupportedScript} from '../util/script_detection.js';
import {plugin as rtlTextPlugin} from '../source/rtl_text_plugin.js';

import type {TransitionSpecification} from '../style-spec/types.js';

class EvaluationParameters {
    zoom: number;
    pitch: number;
    now: number;
    fadeDuration: number;
    brightness: ?number;
    transition: TransitionSpecification;

    // "options" may also be another EvaluationParameters to copy
    constructor(zoom: number, options?: *) {
        this.zoom = zoom;

        if (options) {
            this.now = options.now;
            this.fadeDuration = options.fadeDuration;
            this.transition = options.transition;
            this.pitch = options.pitch;
            this.brightness = options.brightness;
        } else {
            this.now = 0;
            this.fadeDuration = 0;
            this.transition = {};
            this.pitch = 0;
        }
    }

    isSupportedScript(str: string): boolean {
        return isStringInSupportedScript(str, rtlTextPlugin.isLoaded());
    }
}

export default EvaluationParameters;
