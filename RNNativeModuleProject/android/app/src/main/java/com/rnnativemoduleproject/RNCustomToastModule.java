package com.rnnativemoduleproject;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class RNCustomToastModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    RNCustomToastModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    /**
     * 리액트네이티브에서 호출될 모듈 이름
     * @return
     */
    @Override
    public String getName() {
        return "RNCustomToastModule";
    }

    /**
     * 리액트네이티브에서 사용될 상수를 정의할 수 있다.
     * @return
     */
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    /**
     * 리액트네이티브에서 최종 호출될 메소드명이며
     * Toast를 띄우는 코드다.
     * @param message
     * @param duration
     */
    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}