#include <string.h>
#include <alloca.h>
#include <jni.h>
#include "validation.h"

#if __has_include ("../../../../keys.secret")
#   define HAS_KEYS 1
#   include "../../../../keys.secret"
#else
#   define HAS_KEYS 0
#endif

JNIEXPORT jstring JNICALL
Java_so_onekey_app_wallet_keys_KeysNativeProvider_getLiteSecureChannelInitParams(JNIEnv *env,
                                                                                 jobject thiz,
                                                                                 jobject context) {
}