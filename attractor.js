/* @ts-self-types="./attractor.d.ts" */

//#region wasm imports

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Window_5bac5165340af82e: function() { return logError(function (arg0) {
            const ret = arg0.Window;
            return ret;
        }, arguments); },
        __wbg_WorkerGlobalScope_d0d150069210a6e8: function() { return logError(function (arg0) {
            const ret = arg0.WorkerGlobalScope;
            return ret;
        }, arguments); },
        __wbg___wbindgen_boolean_get_c0f3f60bac5a78d1: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            if (!isLikeNone(ret)) {
                _assertBoolean(ret);
            }
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_5398f5bb970e0daa: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_41dbb8413020e076: function(arg0, arg1) {
            const ret = arg0 in arg1;
            _assertBoolean(ret);
            return ret;
        },
        __wbg___wbindgen_is_function_3c846841762788c1: function(arg0) {
            const ret = typeof(arg0) === 'function';
            _assertBoolean(ret);
            return ret;
        },
        __wbg___wbindgen_is_null_0b605fc6b167c56f: function(arg0) {
            const ret = arg0 === null;
            _assertBoolean(ret);
            return ret;
        },
        __wbg___wbindgen_is_object_781bc9f159099513: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            _assertBoolean(ret);
            return ret;
        },
        __wbg___wbindgen_is_undefined_52709e72fb9f179c: function(arg0) {
            const ret = arg0 === undefined;
            _assertBoolean(ret);
            return ret;
        },
        __wbg___wbindgen_number_get_34bb9d9dcfa21373: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            if (!isLikeNone(ret)) {
                _assertNum(ret);
            }
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_395e606bd0ee4427: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_6ddd609b62940d55: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_6b5b6b8576d35cb1: function() { return logError(function (arg0) {
            arg0._wbg_cb_unref();
        }, arguments); },
        __wbg_activeElement_6dbc553c2dde3f9b: function() { return logError(function (arg0) {
            const ret = arg0.activeElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_activeElement_c2981ba623ac16d9: function() { return logError(function (arg0) {
            const ret = arg0.activeElement;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_activeTexture_11610c2c57e26cfa: function() { return logError(function (arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        }, arguments); },
        __wbg_activeTexture_66fa8cafd3610ddb: function() { return logError(function (arg0, arg1) {
            arg0.activeTexture(arg1 >>> 0);
        }, arguments); },
        __wbg_adapterInfo_a07ef480e4b0d470: function() { return logError(function (arg0) {
            const ret = arg0.adapterInfo;
            return ret;
        }, arguments); },
        __wbg_addEventListener_97281b0177d72360: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3, arg4);
        }, arguments); },
        __wbg_altKey_7f2c3a24bf5420ae: function() { return logError(function (arg0) {
            const ret = arg0.altKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_altKey_a8e58d65866de029: function() { return logError(function (arg0) {
            const ret = arg0.altKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_appendChild_8cb157b6ec5612a6: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.appendChild(arg1);
            return ret;
        }, arguments); },
        __wbg_arrayBuffer_7ff5e58aa85a64f7: function() { return logError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_at_148e208a12042f35: function() { return logError(function (arg0, arg1) {
            const ret = arg0.at(arg1);
            return ret;
        }, arguments); },
        __wbg_attachShader_6426e8576a115345: function() { return logError(function (arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        }, arguments); },
        __wbg_attachShader_e557f37438249ff7: function() { return logError(function (arg0, arg1, arg2) {
            arg0.attachShader(arg1, arg2);
        }, arguments); },
        __wbg_beginComputePass_8409c5720049090e: function() { return logError(function (arg0, arg1) {
            const ret = arg0.beginComputePass(arg1);
            return ret;
        }, arguments); },
        __wbg_beginOcclusionQuery_79a888f7a697a6d3: function() { return logError(function (arg0, arg1) {
            arg0.beginOcclusionQuery(arg1 >>> 0);
        }, arguments); },
        __wbg_beginQuery_ac2ef47e00ec594a: function() { return logError(function (arg0, arg1, arg2) {
            arg0.beginQuery(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_beginRenderPass_a19cc6156a7858b4: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.beginRenderPass(arg1);
            return ret;
        }, arguments); },
        __wbg_bindAttribLocation_1d976e3bcc954adb: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_bindAttribLocation_8791402cc151e914: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.bindAttribLocation(arg1, arg2 >>> 0, getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_bindBufferRange_469c3643c2099003: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.bindBufferRange(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        }, arguments); },
        __wbg_bindBuffer_142694a9732bc098: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindBuffer_d2a4f6cfb33336fb: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindBuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindFramebuffer_4643a12ca1c72776: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindFramebuffer_fdc7c38f1c700e64: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindFramebuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindRenderbuffer_91db2fc67c1f0115: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindRenderbuffer_e6cfc20b6ebcf605: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindRenderbuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindSampler_be3a05e88cecae98: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindSampler(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindTexture_6a0892cd752b41d9: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindTexture_6e7e157d0aabe457: function() { return logError(function (arg0, arg1, arg2) {
            arg0.bindTexture(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_bindVertexArrayOES_082b0791772327fa: function() { return logError(function (arg0, arg1) {
            arg0.bindVertexArrayOES(arg1);
        }, arguments); },
        __wbg_bindVertexArray_c307251f3ff61930: function() { return logError(function (arg0, arg1) {
            arg0.bindVertexArray(arg1);
        }, arguments); },
        __wbg_blendColor_b4c7d8333af4876d: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.blendColor(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_blendColor_c2771aead110c867: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.blendColor(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_blendEquationSeparate_b08aba1c715cb265: function() { return logError(function (arg0, arg1, arg2) {
            arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_blendEquationSeparate_f16ada84ba672878: function() { return logError(function (arg0, arg1, arg2) {
            arg0.blendEquationSeparate(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_blendEquation_46367a891604b604: function() { return logError(function (arg0, arg1) {
            arg0.blendEquation(arg1 >>> 0);
        }, arguments); },
        __wbg_blendEquation_c353d94b097007e5: function() { return logError(function (arg0, arg1) {
            arg0.blendEquation(arg1 >>> 0);
        }, arguments); },
        __wbg_blendFuncSeparate_6aae138b81d75b47: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_blendFuncSeparate_8c91c200b1a72e4b: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.blendFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_blendFunc_2e98c5f57736e5f3: function() { return logError(function (arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_blendFunc_4ce0991003a9468e: function() { return logError(function (arg0, arg1, arg2) {
            arg0.blendFunc(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_blitFramebuffer_c1a68feaca974c87: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.blitFramebuffer(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0);
        }, arguments); },
        __wbg_blockSize_5871fe73cc8dcba0: function() { return logError(function (arg0) {
            const ret = arg0.blockSize;
            return ret;
        }, arguments); },
        __wbg_blur_d2a9a0c579ce1c5f: function() { return handleError(function (arg0) {
            arg0.blur();
        }, arguments); },
        __wbg_body_5eb99e7257e5ae34: function() { return logError(function (arg0) {
            const ret = arg0.body;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_bottom_bfd7fcb3cf1632f0: function() { return logError(function (arg0) {
            const ret = arg0.bottom;
            return ret;
        }, arguments); },
        __wbg_bufferData_730b629ba3f6824f: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        }, arguments); },
        __wbg_bufferData_d20232e3d5dcdc62: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        }, arguments); },
        __wbg_bufferData_d3bd8c69ff4b7254: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        }, arguments); },
        __wbg_bufferData_fb2d946faa09a60b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferData(arg1 >>> 0, arg2, arg3 >>> 0);
        }, arguments); },
        __wbg_bufferSubData_3fcefd4648de39b5: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_bufferSubData_7b112eb88657e7c0: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.bufferSubData(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_button_bdc91677bd7bbf58: function() { return logError(function (arg0) {
            const ret = arg0.button;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_cancelAnimationFrame_43fad84647f46036: function() { return handleError(function (arg0, arg1) {
            arg0.cancelAnimationFrame(arg1);
        }, arguments); },
        __wbg_changedTouches_3c03cd569b57245b: function() { return logError(function (arg0) {
            const ret = arg0.changedTouches;
            return ret;
        }, arguments); },
        __wbg_clearBuffer_45f598320c588982: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.clearBuffer(arg1, arg2, arg3);
        }, arguments); },
        __wbg_clearBuffer_c43149005da4f328: function() { return logError(function (arg0, arg1, arg2) {
            arg0.clearBuffer(arg1, arg2);
        }, arguments); },
        __wbg_clearBufferfv_7bc3e789059fd29b: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferfv(arg1 >>> 0, arg2, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_clearBufferiv_050b376a7480ef9c: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferiv(arg1 >>> 0, arg2, getArrayI32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_clearBufferuiv_d75635e80261ea93: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.clearBufferuiv(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_clearDepth_0fb1b5aba2ff2d63: function() { return logError(function (arg0, arg1) {
            arg0.clearDepth(arg1);
        }, arguments); },
        __wbg_clearDepth_3ff5ef5e5fad4016: function() { return logError(function (arg0, arg1) {
            arg0.clearDepth(arg1);
        }, arguments); },
        __wbg_clearInterval_1cf7b4d7d9952d6e: function() { return logError(function (arg0, arg1) {
            arg0.clearInterval(arg1);
        }, arguments); },
        __wbg_clearStencil_0e5924dc2f0fa2b7: function() { return logError(function (arg0, arg1) {
            arg0.clearStencil(arg1);
        }, arguments); },
        __wbg_clearStencil_4505636e726114d0: function() { return logError(function (arg0, arg1) {
            arg0.clearStencil(arg1);
        }, arguments); },
        __wbg_clear_3d6ad4729e206aac: function() { return logError(function (arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        }, arguments); },
        __wbg_clear_5a0606f7c62ad39a: function() { return logError(function (arg0, arg1) {
            arg0.clear(arg1 >>> 0);
        }, arguments); },
        __wbg_clientWaitSync_5402aac488fc18bb: function() { return logError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.clientWaitSync(arg1, arg2 >>> 0, arg3 >>> 0);
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_clientX_7db5d6e77c921464: function() { return logError(function (arg0) {
            const ret = arg0.clientX;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_clientX_eff94e775c0667a2: function() { return logError(function (arg0) {
            const ret = arg0.clientX;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_clientY_2cf964b439a5974f: function() { return logError(function (arg0) {
            const ret = arg0.clientY;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_clientY_6293e127369957bf: function() { return logError(function (arg0) {
            const ret = arg0.clientY;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_clipboardData_643239fa2d14590e: function() { return logError(function (arg0) {
            const ret = arg0.clipboardData;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_clipboard_0285d75eacda5282: function() { return logError(function (arg0) {
            const ret = arg0.clipboard;
            return ret;
        }, arguments); },
        __wbg_colorMask_b053114f7da42448: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        }, arguments); },
        __wbg_colorMask_b47840e05b5f8181: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.colorMask(arg1 !== 0, arg2 !== 0, arg3 !== 0, arg4 !== 0);
        }, arguments); },
        __wbg_compileShader_623a1051cf49494b: function() { return logError(function (arg0, arg1) {
            arg0.compileShader(arg1);
        }, arguments); },
        __wbg_compileShader_7ca66245c2798601: function() { return logError(function (arg0, arg1) {
            arg0.compileShader(arg1);
        }, arguments); },
        __wbg_compressedTexSubImage2D_593058a6f5aca176: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
        }, arguments); },
        __wbg_compressedTexSubImage2D_aab12b65159c282e: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8);
        }, arguments); },
        __wbg_compressedTexSubImage2D_f3c4ae95ef9d2420: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.compressedTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8, arg9);
        }, arguments); },
        __wbg_compressedTexSubImage3D_77a6ab77487aa211: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10, arg11);
        }, arguments); },
        __wbg_compressedTexSubImage3D_95f64742aae944b8: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.compressedTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10);
        }, arguments); },
        __wbg_configure_16541864db644c70: function() { return handleError(function (arg0, arg1) {
            arg0.configure(arg1);
        }, arguments); },
        __wbg_contentBoxSize_26208705af9ba965: function() { return logError(function (arg0) {
            const ret = arg0.contentBoxSize;
            return ret;
        }, arguments); },
        __wbg_contentRect_7047bba46353f683: function() { return logError(function (arg0) {
            const ret = arg0.contentRect;
            return ret;
        }, arguments); },
        __wbg_copyBufferSubData_aaeed526e555f0d1: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.copyBufferSubData(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        }, arguments); },
        __wbg_copyBufferToBuffer_ab55c9b7610f063b: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4, arg5);
        }, arguments); },
        __wbg_copyBufferToBuffer_b9173642596dac6a: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.copyBufferToBuffer(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_copyBufferToTexture_fd9a2b325c271a1c: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyBufferToTexture(arg1, arg2, arg3);
        }, arguments); },
        __wbg_copyExternalImageToTexture_6d56ad685a99824d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyExternalImageToTexture(arg1, arg2, arg3);
        }, arguments); },
        __wbg_copyTexSubImage2D_08a10bcd45b88038: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        }, arguments); },
        __wbg_copyTexSubImage2D_b9a10d000c616b3e: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
            arg0.copyTexSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8);
        }, arguments); },
        __wbg_copyTexSubImage3D_7fcdf7c85bc308a5: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.copyTexSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
        }, arguments); },
        __wbg_copyTextureToBuffer_c6a46adf0738476b: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyTextureToBuffer(arg1, arg2, arg3);
        }, arguments); },
        __wbg_copyTextureToTexture_9e4d8e43703037c7: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.copyTextureToTexture(arg1, arg2, arg3);
        }, arguments); },
        __wbg_createBindGroupLayout_adb8337a6808ae24: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBindGroupLayout(arg1);
            return ret;
        }, arguments); },
        __wbg_createBindGroup_91159ca759115307: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createBindGroup(arg1);
            return ret;
        }, arguments); },
        __wbg_createBuffer_1aa34315dc9585a2: function() { return logError(function (arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createBuffer_59de141e89014140: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createBuffer(arg1);
            return ret;
        }, arguments); },
        __wbg_createBuffer_8e47b88217a98607: function() { return logError(function (arg0) {
            const ret = arg0.createBuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createCommandEncoder_dc2b2ca6f09bd4c3: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createCommandEncoder(arg1);
            return ret;
        }, arguments); },
        __wbg_createComputePipeline_d9b5cceb5f793856: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createComputePipeline(arg1);
            return ret;
        }, arguments); },
        __wbg_createElement_9b0aab265c549ded: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_createFramebuffer_911d55689ff8358e: function() { return logError(function (arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createFramebuffer_97d39363cdd9242a: function() { return logError(function (arg0) {
            const ret = arg0.createFramebuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createPipelineLayout_a5290f84492f8b1e: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createPipelineLayout(arg1);
            return ret;
        }, arguments); },
        __wbg_createProgram_1fa32901e4db13cd: function() { return logError(function (arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createProgram_8eb14525e7fcffb8: function() { return logError(function (arg0) {
            const ret = arg0.createProgram();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createQuerySet_410501e6ae228c6a: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createQuerySet(arg1);
            return ret;
        }, arguments); },
        __wbg_createQuery_0f754c13ae341f39: function() { return logError(function (arg0) {
            const ret = arg0.createQuery();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createRenderBundleEncoder_67e854f22d8a027d: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createRenderBundleEncoder(arg1);
            return ret;
        }, arguments); },
        __wbg_createRenderPipeline_f7aca470ad8ce865: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createRenderPipeline(arg1);
            return ret;
        }, arguments); },
        __wbg_createRenderbuffer_69fb8c438e70e494: function() { return logError(function (arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createRenderbuffer_8847d6a81975caee: function() { return logError(function (arg0) {
            const ret = arg0.createRenderbuffer();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createSampler_6b972cd00bcc5dfb: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createSampler(arg1);
            return ret;
        }, arguments); },
        __wbg_createSampler_7bed7d46769be9a7: function() { return logError(function (arg0) {
            const ret = arg0.createSampler();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createShaderModule_bbe0476992dd060e: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createShaderModule(arg1);
            return ret;
        }, arguments); },
        __wbg_createShader_9ffc9dc1832608d7: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createShader_a00913b8c6489e6b: function() { return logError(function (arg0, arg1) {
            const ret = arg0.createShader(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createTask_6eb3a8b6dd2f87c9: function() { return handleError(function (arg0, arg1) {
            const ret = console.createTask(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_createTexture_011d4b0badf853e3: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createTexture(arg1);
            return ret;
        }, arguments); },
        __wbg_createTexture_9b1b4f40cab0097b: function() { return logError(function (arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createTexture_ceb367c3528574ec: function() { return logError(function (arg0) {
            const ret = arg0.createTexture();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createVertexArrayOES_1b30eca82fb89274: function() { return logError(function (arg0) {
            const ret = arg0.createVertexArrayOES();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createVertexArray_420460898dc8d838: function() { return logError(function (arg0) {
            const ret = arg0.createVertexArray();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_createView_1ef8f1ddc16facb0: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.createView(arg1);
            return ret;
        }, arguments); },
        __wbg_ctrlKey_6f8a95d15c098679: function() { return logError(function (arg0) {
            const ret = arg0.ctrlKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_ctrlKey_a41da599a72ee93d: function() { return logError(function (arg0) {
            const ret = arg0.ctrlKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_cullFace_2c9f57c2f90cbe70: function() { return logError(function (arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        }, arguments); },
        __wbg_cullFace_d759515c1199276c: function() { return logError(function (arg0, arg1) {
            arg0.cullFace(arg1 >>> 0);
        }, arguments); },
        __wbg_dataTransfer_4b0a728db6248031: function() { return logError(function (arg0) {
            const ret = arg0.dataTransfer;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_data_50c361f7a344d1b9: function() { return logError(function (arg0, arg1) {
            const ret = arg1.data;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_debug_4b9b1a2d5972be57: function() { return logError(function (arg0) {
            console.debug(arg0);
        }, arguments); },
        __wbg_deleteBuffer_a2f8244b249c356e: function() { return logError(function (arg0, arg1) {
            arg0.deleteBuffer(arg1);
        }, arguments); },
        __wbg_deleteBuffer_b053c58b4ed1ab1c: function() { return logError(function (arg0, arg1) {
            arg0.deleteBuffer(arg1);
        }, arguments); },
        __wbg_deleteFramebuffer_1af8b97d40962089: function() { return logError(function (arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        }, arguments); },
        __wbg_deleteFramebuffer_badadfcd45ef5e64: function() { return logError(function (arg0, arg1) {
            arg0.deleteFramebuffer(arg1);
        }, arguments); },
        __wbg_deleteProgram_cb8f79d5c1e84863: function() { return logError(function (arg0, arg1) {
            arg0.deleteProgram(arg1);
        }, arguments); },
        __wbg_deleteProgram_fc1d8d77ef7e154d: function() { return logError(function (arg0, arg1) {
            arg0.deleteProgram(arg1);
        }, arguments); },
        __wbg_deleteQuery_9420681ec3d643ef: function() { return logError(function (arg0, arg1) {
            arg0.deleteQuery(arg1);
        }, arguments); },
        __wbg_deleteRenderbuffer_401ffe15b179c343: function() { return logError(function (arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        }, arguments); },
        __wbg_deleteRenderbuffer_b030660bf2e9fc95: function() { return logError(function (arg0, arg1) {
            arg0.deleteRenderbuffer(arg1);
        }, arguments); },
        __wbg_deleteSampler_8111fd44b061bdd1: function() { return logError(function (arg0, arg1) {
            arg0.deleteSampler(arg1);
        }, arguments); },
        __wbg_deleteShader_5b6992b5e5894d44: function() { return logError(function (arg0, arg1) {
            arg0.deleteShader(arg1);
        }, arguments); },
        __wbg_deleteShader_a8e5ccb432053dbe: function() { return logError(function (arg0, arg1) {
            arg0.deleteShader(arg1);
        }, arguments); },
        __wbg_deleteSync_deeb154f55e59a7d: function() { return logError(function (arg0, arg1) {
            arg0.deleteSync(arg1);
        }, arguments); },
        __wbg_deleteTexture_00ecab74f7bddf91: function() { return logError(function (arg0, arg1) {
            arg0.deleteTexture(arg1);
        }, arguments); },
        __wbg_deleteTexture_d8b1d278731e0c9f: function() { return logError(function (arg0, arg1) {
            arg0.deleteTexture(arg1);
        }, arguments); },
        __wbg_deleteVertexArrayOES_9da21e3515bf556e: function() { return logError(function (arg0, arg1) {
            arg0.deleteVertexArrayOES(arg1);
        }, arguments); },
        __wbg_deleteVertexArray_5a75f4855c2881df: function() { return logError(function (arg0, arg1) {
            arg0.deleteVertexArray(arg1);
        }, arguments); },
        __wbg_deltaMode_e239727f16c7ad68: function() { return logError(function (arg0) {
            const ret = arg0.deltaMode;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_deltaX_74ad854454fab779: function() { return logError(function (arg0) {
            const ret = arg0.deltaX;
            return ret;
        }, arguments); },
        __wbg_deltaY_c6ccae416e166d01: function() { return logError(function (arg0) {
            const ret = arg0.deltaY;
            return ret;
        }, arguments); },
        __wbg_depthFunc_0376ef69458b01d8: function() { return logError(function (arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        }, arguments); },
        __wbg_depthFunc_befeae10cb29920d: function() { return logError(function (arg0, arg1) {
            arg0.depthFunc(arg1 >>> 0);
        }, arguments); },
        __wbg_depthMask_c6c1b0d88ade6c84: function() { return logError(function (arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        }, arguments); },
        __wbg_depthMask_fd5bc408415b9cd3: function() { return logError(function (arg0, arg1) {
            arg0.depthMask(arg1 !== 0);
        }, arguments); },
        __wbg_depthRange_b42d493a2b9258aa: function() { return logError(function (arg0, arg1, arg2) {
            arg0.depthRange(arg1, arg2);
        }, arguments); },
        __wbg_depthRange_ebba8110d3fe0332: function() { return logError(function (arg0, arg1, arg2) {
            arg0.depthRange(arg1, arg2);
        }, arguments); },
        __wbg_description_972ee565dde8fe3f: function() { return logError(function (arg0, arg1) {
            const ret = arg1.description;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_destroy_479a1ccb4eb28cd7: function() { return logError(function (arg0) {
            arg0.destroy();
        }, arguments); },
        __wbg_destroy_f93c404bce2c3665: function() { return logError(function (arg0) {
            arg0.destroy();
        }, arguments); },
        __wbg_destroy_fac98be5a82e0ade: function() { return logError(function (arg0) {
            arg0.destroy();
        }, arguments); },
        __wbg_devicePixelContentBoxSize_82a5f309b4b96a31: function() { return logError(function (arg0) {
            const ret = arg0.devicePixelContentBoxSize;
            return ret;
        }, arguments); },
        __wbg_devicePixelRatio_c36a5fab28da634e: function() { return logError(function (arg0) {
            const ret = arg0.devicePixelRatio;
            return ret;
        }, arguments); },
        __wbg_disableVertexAttribArray_124a165b099b763b: function() { return logError(function (arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        }, arguments); },
        __wbg_disableVertexAttribArray_c4f42277355986c0: function() { return logError(function (arg0, arg1) {
            arg0.disableVertexAttribArray(arg1 >>> 0);
        }, arguments); },
        __wbg_disable_62ec2189c50a0db7: function() { return logError(function (arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        }, arguments); },
        __wbg_disable_7731e2f3362ef1c5: function() { return logError(function (arg0, arg1) {
            arg0.disable(arg1 >>> 0);
        }, arguments); },
        __wbg_disconnect_09ddbc78942a2057: function() { return logError(function (arg0) {
            arg0.disconnect();
        }, arguments); },
        __wbg_dispatchWorkgroupsIndirect_c588855da1b3b4ea: function() { return logError(function (arg0, arg1, arg2) {
            arg0.dispatchWorkgroupsIndirect(arg1, arg2);
        }, arguments); },
        __wbg_dispatchWorkgroups_863a24e86337dc58: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
        }, arguments); },
        __wbg_document_c0320cd4183c6d9b: function() { return logError(function (arg0) {
            const ret = arg0.document;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_done_08ce71ee07e3bd17: function() { return logError(function (arg0) {
            const ret = arg0.done;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_drawArraysInstancedANGLE_20ee4b8f67503b54: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.drawArraysInstancedANGLE(arg1 >>> 0, arg2, arg3, arg4);
        }, arguments); },
        __wbg_drawArraysInstanced_13e40fca13079ade: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.drawArraysInstanced(arg1 >>> 0, arg2, arg3, arg4);
        }, arguments); },
        __wbg_drawArrays_13005ccff75e4210: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_drawArrays_c20dedf441392005: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.drawArrays(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_drawBuffersWEBGL_5f9efe378355889a: function() { return logError(function (arg0, arg1) {
            arg0.drawBuffersWEBGL(arg1);
        }, arguments); },
        __wbg_drawBuffers_823c4881ba82dc9c: function() { return logError(function (arg0, arg1) {
            arg0.drawBuffers(arg1);
        }, arguments); },
        __wbg_drawElementsInstancedANGLE_e9170c6414853487: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawElementsInstancedANGLE(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_drawElementsInstanced_2e549060a77ba831: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawElementsInstanced(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_drawIndexedIndirect_99c3a8847840c757: function() { return logError(function (arg0, arg1, arg2) {
            arg0.drawIndexedIndirect(arg1, arg2);
        }, arguments); },
        __wbg_drawIndexed_c5e4a5b9b73cf1a9: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.drawIndexed(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
        }, arguments); },
        __wbg_drawIndirect_b633c26f6078437e: function() { return logError(function (arg0, arg1, arg2) {
            arg0.drawIndirect(arg1, arg2);
        }, arguments); },
        __wbg_draw_9a35daa0096c6f2c: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_elementFromPoint_34d7fb4219487817: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_elementFromPoint_a3f3109c79a7a967: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.elementFromPoint(arg1, arg2);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_enableVertexAttribArray_60dadea3a00e104a: function() { return logError(function (arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        }, arguments); },
        __wbg_enableVertexAttribArray_626e8d2d9d1fdff9: function() { return logError(function (arg0, arg1) {
            arg0.enableVertexAttribArray(arg1 >>> 0);
        }, arguments); },
        __wbg_enable_3728894fa8c1d348: function() { return logError(function (arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        }, arguments); },
        __wbg_enable_91dff7f43064bb54: function() { return logError(function (arg0, arg1) {
            arg0.enable(arg1 >>> 0);
        }, arguments); },
        __wbg_endOcclusionQuery_0ca07af41eead31b: function() { return logError(function (arg0) {
            arg0.endOcclusionQuery();
        }, arguments); },
        __wbg_endQuery_48241eaef2e96940: function() { return logError(function (arg0, arg1) {
            arg0.endQuery(arg1 >>> 0);
        }, arguments); },
        __wbg_end_176171edf82ded94: function() { return logError(function (arg0) {
            arg0.end();
        }, arguments); },
        __wbg_end_1db12af2e0ff1235: function() { return logError(function (arg0) {
            arg0.end();
        }, arguments); },
        __wbg_error_8d9a8e04cd1d3588: function() { return logError(function (arg0) {
            console.error(arg0);
        }, arguments); },
        __wbg_error_a6fa202b58aa1cd3: function() { return logError(function (arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        }, arguments); },
        __wbg_error_bbcc95426a3167ad: function() { return logError(function (arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        }, arguments); },
        __wbg_error_c9510133954a995f: function() { return logError(function (arg0) {
            const ret = arg0.error;
            return ret;
        }, arguments); },
        __wbg_executeBundles_0aa4cbfd6aa4c8a6: function() { return logError(function (arg0, arg1) {
            arg0.executeBundles(arg1);
        }, arguments); },
        __wbg_features_67a150044f55609a: function() { return logError(function (arg0) {
            const ret = arg0.features;
            return ret;
        }, arguments); },
        __wbg_features_8db042ef0fb9a3f9: function() { return logError(function (arg0) {
            const ret = arg0.features;
            return ret;
        }, arguments); },
        __wbg_fenceSync_460953d9ad5fd31a: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.fenceSync(arg1 >>> 0, arg2 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_files_a38be7125affe1d3: function() { return logError(function (arg0) {
            const ret = arg0.files;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_finish_48a7b6da7b76999e: function() { return logError(function (arg0) {
            const ret = arg0.finish();
            return ret;
        }, arguments); },
        __wbg_finish_68d7c5925d3fa394: function() { return logError(function (arg0, arg1) {
            const ret = arg0.finish(arg1);
            return ret;
        }, arguments); },
        __wbg_flush_049a445c404024c2: function() { return logError(function (arg0) {
            arg0.flush();
        }, arguments); },
        __wbg_flush_c7dd5b1ae1447448: function() { return logError(function (arg0) {
            arg0.flush();
        }, arguments); },
        __wbg_focus_885197ce680db9e0: function() { return handleError(function (arg0) {
            arg0.focus();
        }, arguments); },
        __wbg_force_8a9a1ff03c145e09: function() { return logError(function (arg0) {
            const ret = arg0.force;
            return ret;
        }, arguments); },
        __wbg_framebufferRenderbuffer_7a2be23309166ad3: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        }, arguments); },
        __wbg_framebufferRenderbuffer_d8c1d0b985bd3c51: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.framebufferRenderbuffer(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4);
        }, arguments); },
        __wbg_framebufferTexture2D_bf4d47f4027a3682: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_framebufferTexture2D_e2f7d82e6707010e: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTexture2D(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_framebufferTextureLayer_01d5b9516636ccae: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.framebufferTextureLayer(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5);
        }, arguments); },
        __wbg_framebufferTextureMultiviewOVR_336ea10e261ec5f6: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.framebufferTextureMultiviewOVR(arg1 >>> 0, arg2 >>> 0, arg3, arg4, arg5, arg6);
        }, arguments); },
        __wbg_frontFace_1537b8c3fc174f05: function() { return logError(function (arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        }, arguments); },
        __wbg_frontFace_57081a0312eb822e: function() { return logError(function (arg0, arg1) {
            arg0.frontFace(arg1 >>> 0);
        }, arguments); },
        __wbg_getBindGroupLayout_c891d9fa45731712: function() { return logError(function (arg0, arg1) {
            const ret = arg0.getBindGroupLayout(arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getBoundingClientRect_b236f2e393fd0e7a: function() { return logError(function (arg0) {
            const ret = arg0.getBoundingClientRect();
            return ret;
        }, arguments); },
        __wbg_getBufferSubData_cbabbb87d4c5c57d: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.getBufferSubData(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_getComputedStyle_b12e52450a4be72c: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getComputedStyle(arg1);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_07270456453ee7f5: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_794490fe04be926a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2), arg3);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_a9236f98f1f7fe7c: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getContext_f04bf8f22dcb2d53: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getContext(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getCurrentTexture_9b00da7f6bc38606: function() { return handleError(function (arg0) {
            const ret = arg0.getCurrentTexture();
            return ret;
        }, arguments); },
        __wbg_getData_f1a32ff1c8973144: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getData(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getElementById_d1f25d287b19a833: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getExtension_0b8543b0c6b3068d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getExtension(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getIndexedParameter_338c7c91cbabcf3e: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getIndexedParameter(arg1 >>> 0, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getItem_a7cc1d4f154f2e6f: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getItem(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getMappedRange_4a3dc3f452433b71: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getMappedRange(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_getParameter_b1431cfde390c2fc: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getParameter_e634fa73b5e25287: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getParameter(arg1 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getPreferredCanvasFormat_54381f1ef7aec03d: function() { return logError(function (arg0) {
            const ret = arg0.getPreferredCanvasFormat();
            return (__wbindgen_enum_GpuTextureFormat.indexOf(ret) + 1 || 96) - 1;
        }, arguments); },
        __wbg_getProgramInfoLog_50443ddea7475f57: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getProgramInfoLog_e03efa51473d657e: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg1.getProgramInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getProgramParameter_46e2d49878b56edd: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getProgramParameter_7d3bd54ec02de007: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getProgramParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getPropertyValue_d2181532557839cf: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getQueryParameter_5a3a2bd77e5f56bb: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getQueryParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getRandomValues_76dfc69825c9c552: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getRootNode_8990e8d9d4ee9a43: function() { return logError(function (arg0) {
            const ret = arg0.getRootNode();
            return ret;
        }, arguments); },
        __wbg_getShaderInfoLog_22f9e8c90a52f38d: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getShaderInfoLog_40c6a4ae67d82dde: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg1.getShaderInfoLog(arg2);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getShaderParameter_46f64f7ca5d534db: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getShaderParameter_82c275299b111f1b: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getShaderParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getSupportedExtensions_a799751b74c3a674: function() { return logError(function (arg0) {
            const ret = arg0.getSupportedExtensions();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getSupportedProfiles_e089393bebafd3b0: function() { return logError(function (arg0) {
            const ret = arg0.getSupportedProfiles();
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getSyncParameter_fbf70c60f5e3b271: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.getSyncParameter(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getUniformBlockIndex_e483a4d166df9c2a: function() { return logError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformBlockIndex(arg1, getStringFromWasm0(arg2, arg3));
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_getUniformLocation_5eb08673afa04eee: function() { return logError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_getUniformLocation_90cdff44c2fceeb9: function() { return logError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.getUniformLocation(arg1, getStringFromWasm0(arg2, arg3));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_get_3ef1eba1850ade27: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_498b26486bad3f29: function() { return logError(function (arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_get_5d6e99bc01273cd2: function() { return logError(function (arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_get_60085bdd49bc3b63: function() { return logError(function (arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_get_c7546417fb0bec10: function() { return logError(function (arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_get_unchecked_329cfe50afab7352: function() { return logError(function (arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        }, arguments); },
        __wbg_gpu_3f9d7df9a18237f8: function() { return logError(function (arg0) {
            const ret = arg0.gpu;
            return ret;
        }, arguments); },
        __wbg_has_72be553580021507: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.has(getStringFromWasm0(arg1, arg2));
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_hash_d4a10bb21e6ca48e: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.hash;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_height_05531443b91baa6e: function() { return logError(function (arg0) {
            const ret = arg0.height;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_height_6568c4427c3b889d: function() { return logError(function (arg0) {
            const ret = arg0.height;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_height_8c06cb597de53887: function() { return logError(function (arg0) {
            const ret = arg0.height;
            return ret;
        }, arguments); },
        __wbg_height_a6fcb48398bd1539: function() { return logError(function (arg0) {
            const ret = arg0.height;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_height_ee9ea840e5499878: function() { return logError(function (arg0) {
            const ret = arg0.height;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_height_fb8c4164276f25fd: function() { return logError(function (arg0) {
            const ret = arg0.height;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_hidden_19530f76732ba428: function() { return logError(function (arg0) {
            const ret = arg0.hidden;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_host_f8ec5a2b33bbf48d: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.host;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_hostname_a30ece22df1c8b63: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.hostname;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_href_82f7f7056b4e8510: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.href;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_id_491c6437a748ea9f: function() { return logError(function (arg0, arg1) {
            const ret = arg1.id;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_identifier_47ab3929fc9b134a: function() { return logError(function (arg0) {
            const ret = arg0.identifier;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_includes_9f81335525be01f9: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.includes(arg1, arg2);
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_info_46732e46da34944d: function() { return logError(function (arg0) {
            const ret = arg0.info;
            return ret;
        }, arguments); },
        __wbg_info_7d4e223bb1a7e671: function() { return logError(function (arg0) {
            console.info(arg0);
        }, arguments); },
        __wbg_inlineSize_bc956acca480b3d7: function() { return logError(function (arg0) {
            const ret = arg0.inlineSize;
            return ret;
        }, arguments); },
        __wbg_insertDebugMarker_33f3ddf615efa37e: function() { return logError(function (arg0, arg1, arg2) {
            arg0.insertDebugMarker(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_insertDebugMarker_c5b07b3d15ad08b5: function() { return logError(function (arg0, arg1, arg2) {
            arg0.insertDebugMarker(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_insertDebugMarker_cd05f9703c3c241f: function() { return logError(function (arg0, arg1, arg2) {
            arg0.insertDebugMarker(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_instanceof_Document_582e8c4bb7f27d59: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof Document;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_Element_7f177ac0337279af: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof Element;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_GpuAdapter_dc7e13c1676da9bd: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof GPUAdapter;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_GpuCanvasContext_c2609c698a76a6b6: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof GPUCanvasContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_GpuDeviceLostInfo_2f41e62007ddfa63: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof GPUDeviceLostInfo;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_GpuOutOfMemoryError_71010a519adf2661: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof GPUOutOfMemoryError;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_GpuValidationError_a2f8dbe5d7c71adf: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof GPUValidationError;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_HtmlCanvasElement_26125339f936be50: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_HtmlElement_ef05df8222c2b81b: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_HtmlInputElement_f6b9c8ea98b1980f: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof HTMLInputElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_Object_be1962063fcc0c9f: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof Object;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_ResizeObserverEntry_b10be3468ed1ff8c: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof ResizeObserverEntry;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_ResizeObserverSize_2c8f8779c503ed31: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof ResizeObserverSize;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_ShadowRoot_a69345f84dc5ff1b: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof ShadowRoot;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_WebGl2RenderingContext_349f232f715e6bc2: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof WebGL2RenderingContext;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_instanceof_Window_23e677d2c6843922: function() { return logError(function (arg0) {
            let result;
            try {
                result = arg0 instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_invalidateFramebuffer_df9574509a402d4f: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.invalidateFramebuffer(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_isComposing_6f9dc65668dbf70b: function() { return logError(function (arg0) {
            const ret = arg0.isComposing;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_isComposing_dd7318483a13f438: function() { return logError(function (arg0) {
            const ret = arg0.isComposing;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_isSecureContext_b78081a385656549: function() { return logError(function (arg0) {
            const ret = arg0.isSecureContext;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_is_a166b9958c2438ad: function() { return logError(function (arg0, arg1) {
            const ret = Object.is(arg0, arg1);
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_item_5efa89c944084380: function() { return logError(function (arg0, arg1) {
            const ret = arg0.item(arg1 >>> 0);
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_items_51d1f669e8aa2c52: function() { return logError(function (arg0) {
            const ret = arg0.items;
            return ret;
        }, arguments); },
        __wbg_keyCode_bec0b9a76cae4555: function() { return logError(function (arg0) {
            const ret = arg0.keyCode;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_key_99eb0f0a1000963d: function() { return logError(function (arg0, arg1) {
            const ret = arg1.key;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_keys_9601cd3b7c81abcc: function() { return logError(function (arg0) {
            const ret = arg0.keys();
            return ret;
        }, arguments); },
        __wbg_label_18cae34ff19933d7: function() { return logError(function (arg0, arg1) {
            const ret = arg1.label;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_lastModified_3b3c0588040cba6d: function() { return logError(function (arg0) {
            const ret = arg0.lastModified;
            return ret;
        }, arguments); },
        __wbg_left_0050d4abe2736ee9: function() { return logError(function (arg0) {
            const ret = arg0.left;
            return ret;
        }, arguments); },
        __wbg_length_244965d3c9c88588: function() { return logError(function (arg0) {
            const ret = arg0.length;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_length_3c890a3a4a4a97d1: function() { return logError(function (arg0) {
            const ret = arg0.length;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_length_9f1f0154dd1a3858: function() { return logError(function (arg0) {
            const ret = arg0.length;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_length_b3416cf66a5452c8: function() { return logError(function (arg0) {
            const ret = arg0.length;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_length_ea16607d7b61445b: function() { return logError(function (arg0) {
            const ret = arg0.length;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_limits_220da60782102dd7: function() { return logError(function (arg0) {
            const ret = arg0.limits;
            return ret;
        }, arguments); },
        __wbg_limits_8837ca9ac1296563: function() { return logError(function (arg0) {
            const ret = arg0.limits;
            return ret;
        }, arguments); },
        __wbg_linkProgram_b969f67969a850b5: function() { return logError(function (arg0, arg1) {
            arg0.linkProgram(arg1);
        }, arguments); },
        __wbg_linkProgram_e626a3e7d78e1738: function() { return logError(function (arg0, arg1) {
            arg0.linkProgram(arg1);
        }, arguments); },
        __wbg_localStorage_51c38b3b222e1ed2: function() { return handleError(function (arg0) {
            const ret = arg0.localStorage;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_location_fc8d47802682dd93: function() { return logError(function (arg0) {
            const ret = arg0.location;
            return ret;
        }, arguments); },
        __wbg_log_524eedafa26daa59: function() { return logError(function (arg0) {
            console.log(arg0);
        }, arguments); },
        __wbg_lost_75246ae62f6970bc: function() { return logError(function (arg0) {
            const ret = arg0.lost;
            return ret;
        }, arguments); },
        __wbg_mapAsync_288e2fddbc3f7f7b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.mapAsync(arg1 >>> 0, arg2, arg3);
            return ret;
        }, arguments); },
        __wbg_matchMedia_b27489ec503ba2a5: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_matches_d58caa45a0ef29a3: function() { return logError(function (arg0) {
            const ret = arg0.matches;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_maxBindGroups_3e48365ce9cb69b2: function() { return logError(function (arg0) {
            const ret = arg0.maxBindGroups;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxBindingsPerBindGroup_19eab6283879be75: function() { return logError(function (arg0) {
            const ret = arg0.maxBindingsPerBindGroup;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxBufferSize_8086300d000af7cb: function() { return logError(function (arg0) {
            const ret = arg0.maxBufferSize;
            return ret;
        }, arguments); },
        __wbg_maxColorAttachmentBytesPerSample_ee822e1793bea12f: function() { return logError(function (arg0) {
            const ret = arg0.maxColorAttachmentBytesPerSample;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxColorAttachments_3110f22e4c5e3621: function() { return logError(function (arg0) {
            const ret = arg0.maxColorAttachments;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeInvocationsPerWorkgroup_e1b61d9c74f79e81: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeInvocationsPerWorkgroup;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeWorkgroupSizeX_202ebe3252c09676: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeWorkgroupSizeX;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeWorkgroupSizeY_4f66f59c2daaa8f1: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeWorkgroupSizeY;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeWorkgroupSizeZ_eadb1eb36902e045: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeWorkgroupSizeZ;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeWorkgroupStorageSize_05e0131572ec6c1e: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeWorkgroupStorageSize;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxComputeWorkgroupsPerDimension_47cd4aa37eba4a57: function() { return logError(function (arg0) {
            const ret = arg0.maxComputeWorkgroupsPerDimension;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxDynamicStorageBuffersPerPipelineLayout_122112462e514d25: function() { return logError(function (arg0) {
            const ret = arg0.maxDynamicStorageBuffersPerPipelineLayout;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxDynamicUniformBuffersPerPipelineLayout_4c57dbd81a8d1c49: function() { return logError(function (arg0) {
            const ret = arg0.maxDynamicUniformBuffersPerPipelineLayout;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxInterStageShaderVariables_5bb90c2a06f1e9ce: function() { return logError(function (arg0) {
            const ret = arg0.maxInterStageShaderVariables;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxSampledTexturesPerShaderStage_cea16550f969bbdc: function() { return logError(function (arg0) {
            const ret = arg0.maxSampledTexturesPerShaderStage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxSamplersPerShaderStage_1cbd8dba92d87dd9: function() { return logError(function (arg0) {
            const ret = arg0.maxSamplersPerShaderStage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxStorageBufferBindingSize_ff2e77e686018944: function() { return logError(function (arg0) {
            const ret = arg0.maxStorageBufferBindingSize;
            return ret;
        }, arguments); },
        __wbg_maxStorageBuffersPerShaderStage_e496ad22f8b97f12: function() { return logError(function (arg0) {
            const ret = arg0.maxStorageBuffersPerShaderStage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxStorageTexturesPerShaderStage_258aab0d332d9efe: function() { return logError(function (arg0) {
            const ret = arg0.maxStorageTexturesPerShaderStage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxTextureArrayLayers_6fffbda0cd6f3036: function() { return logError(function (arg0) {
            const ret = arg0.maxTextureArrayLayers;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxTextureDimension1D_53d154cf8f16d439: function() { return logError(function (arg0) {
            const ret = arg0.maxTextureDimension1D;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxTextureDimension2D_578c2c471b73bb60: function() { return logError(function (arg0) {
            const ret = arg0.maxTextureDimension2D;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxTextureDimension3D_3532b309b08a5ddf: function() { return logError(function (arg0) {
            const ret = arg0.maxTextureDimension3D;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxUniformBufferBindingSize_6c3b6b8424799146: function() { return logError(function (arg0) {
            const ret = arg0.maxUniformBufferBindingSize;
            return ret;
        }, arguments); },
        __wbg_maxUniformBuffersPerShaderStage_911223507ba8d12a: function() { return logError(function (arg0) {
            const ret = arg0.maxUniformBuffersPerShaderStage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxVertexAttributes_399d9b947e980d08: function() { return logError(function (arg0) {
            const ret = arg0.maxVertexAttributes;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxVertexBufferArrayStride_b5550ff3b3aa4a9e: function() { return logError(function (arg0) {
            const ret = arg0.maxVertexBufferArrayStride;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_maxVertexBuffers_15be37c3f8fbfe0a: function() { return logError(function (arg0) {
            const ret = arg0.maxVertexBuffers;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_message_c152a993ca3c8fa8: function() { return logError(function (arg0, arg1) {
            const ret = arg1.message;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_message_e59c1a10ce6fce88: function() { return logError(function (arg0, arg1) {
            const ret = arg1.message;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_metaKey_04074c2a59c1806c: function() { return logError(function (arg0) {
            const ret = arg0.metaKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_metaKey_09c90f191df1276b: function() { return logError(function (arg0) {
            const ret = arg0.metaKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_minStorageBufferOffsetAlignment_5c389200e0be5fe1: function() { return logError(function (arg0) {
            const ret = arg0.minStorageBufferOffsetAlignment;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_minUniformBufferOffsetAlignment_b9d974e659cd3e20: function() { return logError(function (arg0) {
            const ret = arg0.minUniformBufferOffsetAlignment;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_name_619aa58297c2f80e: function() { return logError(function (arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_navigator_583ffd4fc14c0f7a: function() { return logError(function (arg0) {
            const ret = arg0.navigator;
            return ret;
        }, arguments); },
        __wbg_navigator_9cebf56f28aa719b: function() { return logError(function (arg0) {
            const ret = arg0.navigator;
            return ret;
        }, arguments); },
        __wbg_new_227d7c05414eb861: function() { return logError(function () {
            const ret = new Error();
            return ret;
        }, arguments); },
        __wbg_new_5f486cdf45a04d78: function() { return logError(function (arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        }, arguments); },
        __wbg_new_65733360f6737f38: function() { return logError(function () {
            const ret = new Error();
            return ret;
        }, arguments); },
        __wbg_new_a70fbab9066b301f: function() { return logError(function () {
            const ret = new Array();
            return ret;
        }, arguments); },
        __wbg_new_ab79df5bd7c26067: function() { return logError(function () {
            const ret = new Object();
            return ret;
        }, arguments); },
        __wbg_new_de704db0001dadc8: function() { return handleError(function (arg0) {
            const ret = new ResizeObserver(arg0);
            return ret;
        }, arguments); },
        __wbg_new_from_slice_22da9388ac046e50: function() { return logError(function (arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_new_typed_bccac67128ed885a: function() { return logError(function () {
            const ret = new Array();
            return ret;
        }, arguments); },
        __wbg_new_with_byte_offset_and_length_b2ec5bf7b2f35743: function() { return logError(function (arg0, arg1, arg2) {
            const ret = new Uint8Array(arg0, arg1 >>> 0, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_new_with_record_from_str_to_blob_promise_cc1bdfcccd20917e: function() { return handleError(function (arg0) {
            const ret = new ClipboardItem(arg0);
            return ret;
        }, arguments); },
        __wbg_new_with_u8_array_sequence_and_options_de38f663e19ad899: function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_next_11b99ee6237339e3: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_now_c6d7a7d35f74f6f1: function() { return logError(function (arg0) {
            const ret = arg0.now();
            return ret;
        }, arguments); },
        __wbg_now_e7c6795a7f81e10f: function() { return logError(function (arg0) {
            const ret = arg0.now();
            return ret;
        }, arguments); },
        __wbg_observe_571954223f11dad1: function() { return logError(function (arg0, arg1, arg2) {
            arg0.observe(arg1, arg2);
        }, arguments); },
        __wbg_of_8bf7ed3eca00ea43: function() { return logError(function (arg0) {
            const ret = Array.of(arg0);
            return ret;
        }, arguments); },
        __wbg_offsetTop_095f822df5ddb18f: function() { return logError(function (arg0) {
            const ret = arg0.offsetTop;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_onSubmittedWorkDone_81e152567230130a: function() { return logError(function (arg0) {
            const ret = arg0.onSubmittedWorkDone();
            return ret;
        }, arguments); },
        __wbg_open_6278297441644f07: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_origin_bac5c3119fe40a90: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.origin;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_performance_28be169151161678: function() { return logError(function (arg0) {
            const ret = arg0.performance;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_performance_3fcf6e32a7e1ed0a: function() { return logError(function (arg0) {
            const ret = arg0.performance;
            return ret;
        }, arguments); },
        __wbg_pixelStorei_2a2385ed59538d48: function() { return logError(function (arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_pixelStorei_2a3c5b85cf37caba: function() { return logError(function (arg0, arg1, arg2) {
            arg0.pixelStorei(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_polygonOffset_17cb85e417bf9db7: function() { return logError(function (arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        }, arguments); },
        __wbg_polygonOffset_cc6bec2f9f4a18f7: function() { return logError(function (arg0, arg1, arg2) {
            arg0.polygonOffset(arg1, arg2);
        }, arguments); },
        __wbg_popDebugGroup_230c5710ba23b140: function() { return logError(function (arg0) {
            arg0.popDebugGroup();
        }, arguments); },
        __wbg_popDebugGroup_59f9ef930b2c6c68: function() { return logError(function (arg0) {
            arg0.popDebugGroup();
        }, arguments); },
        __wbg_popDebugGroup_dd0ebd7056d73c8b: function() { return logError(function (arg0) {
            arg0.popDebugGroup();
        }, arguments); },
        __wbg_popErrorScope_bb2c94b6b3fbd6ba: function() { return logError(function (arg0) {
            const ret = arg0.popErrorScope();
            return ret;
        }, arguments); },
        __wbg_port_6ebe920b4e947aa4: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.port;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_preventDefault_25a229bfe5c510f8: function() { return logError(function (arg0) {
            arg0.preventDefault();
        }, arguments); },
        __wbg_protocol_2c6bffc6b0fafa07: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.protocol;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_prototypesetcall_d62e5099504357e6: function() { return logError(function (arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        }, arguments); },
        __wbg_pushDebugGroup_18ca02af72bc23b8: function() { return logError(function (arg0, arg1, arg2) {
            arg0.pushDebugGroup(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_pushDebugGroup_7fd857ec8665c1fe: function() { return logError(function (arg0, arg1, arg2) {
            arg0.pushDebugGroup(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_pushDebugGroup_a21023cc4c5cc96f: function() { return logError(function (arg0, arg1, arg2) {
            arg0.pushDebugGroup(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_pushErrorScope_1fa39584d72a12a8: function() { return logError(function (arg0, arg1) {
            arg0.pushErrorScope(__wbindgen_enum_GpuErrorFilter[arg1]);
        }, arguments); },
        __wbg_push_e87b0e732085a946: function() { return logError(function (arg0, arg1) {
            const ret = arg0.push(arg1);
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_queryCounterEXT_12ca9f560a5855cb: function() { return logError(function (arg0, arg1, arg2) {
            arg0.queryCounterEXT(arg1, arg2 >>> 0);
        }, arguments); },
        __wbg_querySelectorAll_ccbf0696a1c6fed8: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelectorAll(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_querySelector_46ff1b81410aebea: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.querySelector(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_queueMicrotask_0c399741342fb10f: function() { return logError(function (arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        }, arguments); },
        __wbg_queueMicrotask_a082d78ce798393e: function() { return logError(function (arg0) {
            queueMicrotask(arg0);
        }, arguments); },
        __wbg_queue_81f5d725809ccd54: function() { return logError(function (arg0) {
            const ret = arg0.queue;
            return ret;
        }, arguments); },
        __wbg_readBuffer_e559a3da4aa9e434: function() { return logError(function (arg0, arg1) {
            arg0.readBuffer(arg1 >>> 0);
        }, arguments); },
        __wbg_readPixels_41a371053c299080: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_5c7066b5bd547f81: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_readPixels_f675ed52bd44f8f1: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
            arg0.readPixels(arg1, arg2, arg3, arg4, arg5 >>> 0, arg6 >>> 0, arg7);
        }, arguments); },
        __wbg_reason_032ebc72b13c977e: function() { return logError(function (arg0) {
            const ret = arg0.reason;
            return (__wbindgen_enum_GpuDeviceLostReason.indexOf(ret) + 1 || 3) - 1;
        }, arguments); },
        __wbg_removeEventListener_d27694700fc0df8b: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
        }, arguments); },
        __wbg_remove_892d3e438dfde09b: function() { return logError(function (arg0) {
            arg0.remove();
        }, arguments); },
        __wbg_renderbufferStorageMultisample_d999a80fbc25df5f: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.renderbufferStorageMultisample(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_renderbufferStorage_9130171a6ae371dc: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        }, arguments); },
        __wbg_renderbufferStorage_b184ea29064b4e02: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.renderbufferStorage(arg1 >>> 0, arg2 >>> 0, arg3, arg4);
        }, arguments); },
        __wbg_requestAdapter_90f7496e67f82c21: function() { return logError(function (arg0, arg1) {
            const ret = arg0.requestAdapter(arg1);
            return ret;
        }, arguments); },
        __wbg_requestAdapter_fc75ea09f9702080: function() { return logError(function (arg0) {
            const ret = arg0.requestAdapter();
            return ret;
        }, arguments); },
        __wbg_requestAnimationFrame_206c97f410e7a383: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.requestAnimationFrame(arg1);
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_requestDevice_5c307ce72228d3f7: function() { return logError(function (arg0, arg1) {
            const ret = arg0.requestDevice(arg1);
            return ret;
        }, arguments); },
        __wbg_resolveQuerySet_e680fb19b5ed16f6: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.resolveQuerySet(arg1, arg2 >>> 0, arg3 >>> 0, arg4, arg5 >>> 0);
        }, arguments); },
        __wbg_resolve_ae8d83246e5bcc12: function() { return logError(function (arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        }, arguments); },
        __wbg_right_ad93e95b5e30b7ff: function() { return logError(function (arg0) {
            const ret = arg0.right;
            return ret;
        }, arguments); },
        __wbg_run_78b7b601add6ed6b: function() { return logError(function (arg0, arg1, arg2) {
            try {
                var state0 = {a: arg1, b: arg2};
                var cb0 = () => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return wasm_bindgen__convert__closures_____invoke__h127529ea68f7d725(a, state0.b, );
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = arg0.run(cb0);
                _assertBoolean(ret);
                return ret;
            } finally {
                state0.a = state0.b = 0;
            }
        }, arguments); },
        __wbg_samplerParameterf_774cff2229cc9fc3: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.samplerParameterf(arg1, arg2 >>> 0, arg3);
        }, arguments); },
        __wbg_samplerParameteri_7dde222b01588620: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.samplerParameteri(arg1, arg2 >>> 0, arg3);
        }, arguments); },
        __wbg_scissor_b18f09381b341db5: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_scissor_db3842546fb31842: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.scissor(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_search_b51196e2c214ec4e: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.search;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_setAttribute_f20d3b966749ab64: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setBindGroup_2b53fd8bfb43674d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
        }, arguments); },
        __wbg_setBindGroup_58960c4b1bcdd182: function() { return logError(function (arg0, arg1, arg2) {
            arg0.setBindGroup(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_setBindGroup_5d9cc0ccc87c9640: function() { return logError(function (arg0, arg1, arg2) {
            arg0.setBindGroup(arg1 >>> 0, arg2);
        }, arguments); },
        __wbg_setBindGroup_a62f9de1cb2449b2: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setBindGroup(arg1 >>> 0, arg2, getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
        }, arguments); },
        __wbg_setBlendConstant_00efcd0411cbd141: function() { return handleError(function (arg0, arg1) {
            arg0.setBlendConstant(arg1);
        }, arguments); },
        __wbg_setIndexBuffer_b94e5d57d9f987b1: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3);
        }, arguments); },
        __wbg_setIndexBuffer_fe1825c2b9e2d364: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setIndexBuffer(arg1, __wbindgen_enum_GpuIndexFormat[arg2], arg3, arg4);
        }, arguments); },
        __wbg_setItem_5f84aeef0d7f3c17: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setPipeline_1fc98ad28be0d04a: function() { return logError(function (arg0, arg1) {
            arg0.setPipeline(arg1);
        }, arguments); },
        __wbg_setPipeline_9f6b0a3c5901572d: function() { return logError(function (arg0, arg1) {
            arg0.setPipeline(arg1);
        }, arguments); },
        __wbg_setProperty_ef29d2aa64a04d2b: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setScissorRect_98e8337e62425096: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setScissorRect(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_setStencilReference_0a822a2ae19699a2: function() { return logError(function (arg0, arg1) {
            arg0.setStencilReference(arg1 >>> 0);
        }, arguments); },
        __wbg_setVertexBuffer_c3bb3670263af952: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3, arg4);
        }, arguments); },
        __wbg_setVertexBuffer_c3c88170005afc1b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.setVertexBuffer(arg1 >>> 0, arg2, arg3);
        }, arguments); },
        __wbg_setViewport_007a2c7160c6bedb: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.setViewport(arg1, arg2, arg3, arg4, arg5, arg6);
        }, arguments); },
        __wbg_set_7eaa4f96924fd6b3: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(arg0, arg1, arg2);
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_set_a_2f4495829c853bba: function() { return logError(function (arg0, arg1) {
            arg0.a = arg1;
        }, arguments); },
        __wbg_set_access_802ef755476d4064: function() { return logError(function (arg0, arg1) {
            arg0.access = __wbindgen_enum_GpuStorageTextureAccess[arg1];
        }, arguments); },
        __wbg_set_address_mode_u_c13cdf94d097b16d: function() { return logError(function (arg0, arg1) {
            arg0.addressModeU = __wbindgen_enum_GpuAddressMode[arg1];
        }, arguments); },
        __wbg_set_address_mode_v_c09db9861cd052a6: function() { return logError(function (arg0, arg1) {
            arg0.addressModeV = __wbindgen_enum_GpuAddressMode[arg1];
        }, arguments); },
        __wbg_set_address_mode_w_0b49c35f3d4322bf: function() { return logError(function (arg0, arg1) {
            arg0.addressModeW = __wbindgen_enum_GpuAddressMode[arg1];
        }, arguments); },
        __wbg_set_alpha_29642d2219224544: function() { return logError(function (arg0, arg1) {
            arg0.alpha = arg1;
        }, arguments); },
        __wbg_set_alpha_mode_65ba0adaef90e1f3: function() { return logError(function (arg0, arg1) {
            arg0.alphaMode = __wbindgen_enum_GpuCanvasAlphaMode[arg1];
        }, arguments); },
        __wbg_set_alpha_to_coverage_enabled_ab6a22e18e338493: function() { return logError(function (arg0, arg1) {
            arg0.alphaToCoverageEnabled = arg1 !== 0;
        }, arguments); },
        __wbg_set_array_layer_count_de83f575c3f6d15e: function() { return logError(function (arg0, arg1) {
            arg0.arrayLayerCount = arg1 >>> 0;
        }, arguments); },
        __wbg_set_array_stride_2033aeb8a42130f9: function() { return logError(function (arg0, arg1) {
            arg0.arrayStride = arg1;
        }, arguments); },
        __wbg_set_aspect_4c0237c8f21de349: function() { return logError(function (arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        }, arguments); },
        __wbg_set_aspect_adde591ce42eb208: function() { return logError(function (arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        }, arguments); },
        __wbg_set_aspect_feb0fac859e82372: function() { return logError(function (arg0, arg1) {
            arg0.aspect = __wbindgen_enum_GpuTextureAspect[arg1];
        }, arguments); },
        __wbg_set_attributes_39e5a71bf05309a6: function() { return logError(function (arg0, arg1) {
            arg0.attributes = arg1;
        }, arguments); },
        __wbg_set_autofocus_786f861dea5b10ed: function() { return handleError(function (arg0, arg1) {
            arg0.autofocus = arg1 !== 0;
        }, arguments); },
        __wbg_set_b_7081554879455e65: function() { return logError(function (arg0, arg1) {
            arg0.b = arg1;
        }, arguments); },
        __wbg_set_base_array_layer_ab196aad24c8fac6: function() { return logError(function (arg0, arg1) {
            arg0.baseArrayLayer = arg1 >>> 0;
        }, arguments); },
        __wbg_set_base_mip_level_15d29fc182e25a82: function() { return logError(function (arg0, arg1) {
            arg0.baseMipLevel = arg1 >>> 0;
        }, arguments); },
        __wbg_set_beginning_of_pass_write_index_0cb71e33ea66ffc8: function() { return logError(function (arg0, arg1) {
            arg0.beginningOfPassWriteIndex = arg1 >>> 0;
        }, arguments); },
        __wbg_set_beginning_of_pass_write_index_c2f97408798615ca: function() { return logError(function (arg0, arg1) {
            arg0.beginningOfPassWriteIndex = arg1 >>> 0;
        }, arguments); },
        __wbg_set_bind_group_layouts_5c298441f47e30a1: function() { return logError(function (arg0, arg1) {
            arg0.bindGroupLayouts = arg1;
        }, arguments); },
        __wbg_set_binding_234b4c508d19a0a8: function() { return logError(function (arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        }, arguments); },
        __wbg_set_binding_fd933455b600a07f: function() { return logError(function (arg0, arg1) {
            arg0.binding = arg1 >>> 0;
        }, arguments); },
        __wbg_set_blend_1dbdd086fc4fdebf: function() { return logError(function (arg0, arg1) {
            arg0.blend = arg1;
        }, arguments); },
        __wbg_set_box_6a730e6c216d512c: function() { return logError(function (arg0, arg1) {
            arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
        }, arguments); },
        __wbg_set_buffer_8f0ef5be1b92d605: function() { return logError(function (arg0, arg1) {
            arg0.buffer = arg1;
        }, arguments); },
        __wbg_set_buffer_a58d247ab5b5f5b8: function() { return logError(function (arg0, arg1) {
            arg0.buffer = arg1;
        }, arguments); },
        __wbg_set_buffer_b04e4d70b1eb4630: function() { return logError(function (arg0, arg1) {
            arg0.buffer = arg1;
        }, arguments); },
        __wbg_set_buffers_3f9c487ea01dddcf: function() { return logError(function (arg0, arg1) {
            arg0.buffers = arg1;
        }, arguments); },
        __wbg_set_bytes_per_row_39bcca8e0c25e0ee: function() { return logError(function (arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        }, arguments); },
        __wbg_set_bytes_per_row_b8d0d0a0847ff2ea: function() { return logError(function (arg0, arg1) {
            arg0.bytesPerRow = arg1 >>> 0;
        }, arguments); },
        __wbg_set_clear_value_1663cbe7da00e7e4: function() { return logError(function (arg0, arg1) {
            arg0.clearValue = arg1;
        }, arguments); },
        __wbg_set_code_3bb44fc02aa17153: function() { return logError(function (arg0, arg1, arg2) {
            arg0.code = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_color_attachments_b740d060dacde5c0: function() { return logError(function (arg0, arg1) {
            arg0.colorAttachments = arg1;
        }, arguments); },
        __wbg_set_color_d0208d092af4f2e6: function() { return logError(function (arg0, arg1) {
            arg0.color = arg1;
        }, arguments); },
        __wbg_set_color_formats_26c916e6b44f6853: function() { return logError(function (arg0, arg1) {
            arg0.colorFormats = arg1;
        }, arguments); },
        __wbg_set_compare_00dc33383c873ad5: function() { return logError(function (arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        }, arguments); },
        __wbg_set_compare_11834994f7d75687: function() { return logError(function (arg0, arg1) {
            arg0.compare = __wbindgen_enum_GpuCompareFunction[arg1];
        }, arguments); },
        __wbg_set_compute_6c1b9ba0e3041f2c: function() { return logError(function (arg0, arg1) {
            arg0.compute = arg1;
        }, arguments); },
        __wbg_set_count_3753e0959c19c1e8: function() { return logError(function (arg0, arg1) {
            arg0.count = arg1 >>> 0;
        }, arguments); },
        __wbg_set_count_ab42cbc78635ed91: function() { return logError(function (arg0, arg1) {
            arg0.count = arg1 >>> 0;
        }, arguments); },
        __wbg_set_cull_mode_c4f1ef740bd14c40: function() { return logError(function (arg0, arg1) {
            arg0.cullMode = __wbindgen_enum_GpuCullMode[arg1];
        }, arguments); },
        __wbg_set_depth_bias_clamp_f573c2dda55692a6: function() { return logError(function (arg0, arg1) {
            arg0.depthBiasClamp = arg1;
        }, arguments); },
        __wbg_set_depth_bias_ebe05aecbb98e11f: function() { return logError(function (arg0, arg1) {
            arg0.depthBias = arg1;
        }, arguments); },
        __wbg_set_depth_bias_slope_scale_27c8208740c46086: function() { return logError(function (arg0, arg1) {
            arg0.depthBiasSlopeScale = arg1;
        }, arguments); },
        __wbg_set_depth_clear_value_57c2283d39fbb181: function() { return logError(function (arg0, arg1) {
            arg0.depthClearValue = arg1;
        }, arguments); },
        __wbg_set_depth_compare_a9c538cec0e01535: function() { return logError(function (arg0, arg1) {
            arg0.depthCompare = __wbindgen_enum_GpuCompareFunction[arg1];
        }, arguments); },
        __wbg_set_depth_fail_op_42b9d46a7c67baae: function() { return logError(function (arg0, arg1) {
            arg0.depthFailOp = __wbindgen_enum_GpuStencilOperation[arg1];
        }, arguments); },
        __wbg_set_depth_load_op_f95fdb158b819261: function() { return logError(function (arg0, arg1) {
            arg0.depthLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        }, arguments); },
        __wbg_set_depth_or_array_layers_7335d3fc04cd5ade: function() { return logError(function (arg0, arg1) {
            arg0.depthOrArrayLayers = arg1 >>> 0;
        }, arguments); },
        __wbg_set_depth_read_only_33c068b8d027ecfa: function() { return logError(function (arg0, arg1) {
            arg0.depthReadOnly = arg1 !== 0;
        }, arguments); },
        __wbg_set_depth_read_only_878b741b02a4dd71: function() { return logError(function (arg0, arg1) {
            arg0.depthReadOnly = arg1 !== 0;
        }, arguments); },
        __wbg_set_depth_stencil_1c7bed669574dd1e: function() { return logError(function (arg0, arg1) {
            arg0.depthStencil = arg1;
        }, arguments); },
        __wbg_set_depth_stencil_attachment_82ce8924f4e0e79b: function() { return logError(function (arg0, arg1) {
            arg0.depthStencilAttachment = arg1;
        }, arguments); },
        __wbg_set_depth_stencil_format_5de689b688086c97: function() { return logError(function (arg0, arg1) {
            arg0.depthStencilFormat = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_depth_store_op_4c56ab1d005c7bf6: function() { return logError(function (arg0, arg1) {
            arg0.depthStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        }, arguments); },
        __wbg_set_depth_write_enabled_f726d4f27a24ff7e: function() { return logError(function (arg0, arg1) {
            arg0.depthWriteEnabled = arg1 !== 0;
        }, arguments); },
        __wbg_set_device_f991f8a955db69f7: function() { return logError(function (arg0, arg1) {
            arg0.device = arg1;
        }, arguments); },
        __wbg_set_dimension_7ca3d24380d365e4: function() { return logError(function (arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        }, arguments); },
        __wbg_set_dimension_87dd70a08e54ea98: function() { return logError(function (arg0, arg1) {
            arg0.dimension = __wbindgen_enum_GpuTextureDimension[arg1];
        }, arguments); },
        __wbg_set_dst_factor_1382684d97e2aec4: function() { return logError(function (arg0, arg1) {
            arg0.dstFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        }, arguments); },
        __wbg_set_e80615d7a9a43981: function() { return logError(function (arg0, arg1, arg2) {
            arg0.set(arg1, arg2 >>> 0);
        }, arguments); },
        __wbg_set_end_of_pass_write_index_3476a9a4411846af: function() { return logError(function (arg0, arg1) {
            arg0.endOfPassWriteIndex = arg1 >>> 0;
        }, arguments); },
        __wbg_set_end_of_pass_write_index_5e969b5aa2f94e75: function() { return logError(function (arg0, arg1) {
            arg0.endOfPassWriteIndex = arg1 >>> 0;
        }, arguments); },
        __wbg_set_entries_44ee8dc60918063d: function() { return logError(function (arg0, arg1) {
            arg0.entries = arg1;
        }, arguments); },
        __wbg_set_entries_803b89386febf57c: function() { return logError(function (arg0, arg1) {
            arg0.entries = arg1;
        }, arguments); },
        __wbg_set_entry_point_418e5aecbf7f95b4: function() { return logError(function (arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_entry_point_a84dd78ae4a97c6d: function() { return logError(function (arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_entry_point_ac45ddee35909233: function() { return logError(function (arg0, arg1, arg2) {
            arg0.entryPoint = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_external_texture_73d5e5303574a1e8: function() { return logError(function (arg0, arg1) {
            arg0.externalTexture = arg1;
        }, arguments); },
        __wbg_set_fail_op_6f4612035f584d02: function() { return logError(function (arg0, arg1) {
            arg0.failOp = __wbindgen_enum_GpuStencilOperation[arg1];
        }, arguments); },
        __wbg_set_flip_y_21c0cdab245f4d89: function() { return logError(function (arg0, arg1) {
            arg0.flipY = arg1 !== 0;
        }, arguments); },
        __wbg_set_format_2bd90cb220cc6884: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_format_3cc5d6ead9a8cce0: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_format_40d793124494a9df: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_format_723d6bb38a9e71d3: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuVertexFormat[arg1];
        }, arguments); },
        __wbg_set_format_c23f7c142762c3a7: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_format_e0af83ab86ee58dc: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_format_fcbaa54d6b5c186a: function() { return logError(function (arg0, arg1) {
            arg0.format = __wbindgen_enum_GpuTextureFormat[arg1];
        }, arguments); },
        __wbg_set_fragment_9b5673b1b740fe0e: function() { return logError(function (arg0, arg1) {
            arg0.fragment = arg1;
        }, arguments); },
        __wbg_set_front_face_bb590812353fd2e0: function() { return logError(function (arg0, arg1) {
            arg0.frontFace = __wbindgen_enum_GpuFrontFace[arg1];
        }, arguments); },
        __wbg_set_g_aa23517844bd7f61: function() { return logError(function (arg0, arg1) {
            arg0.g = arg1;
        }, arguments); },
        __wbg_set_has_dynamic_offset_ea1fb6bd94b0c904: function() { return logError(function (arg0, arg1) {
            arg0.hasDynamicOffset = arg1 !== 0;
        }, arguments); },
        __wbg_set_height_66583e77881d3a51: function() { return logError(function (arg0, arg1) {
            arg0.height = arg1 >>> 0;
        }, arguments); },
        __wbg_set_height_98a1a397672657e2: function() { return logError(function (arg0, arg1) {
            arg0.height = arg1 >>> 0;
        }, arguments); },
        __wbg_set_height_b6548a01bdcb689a: function() { return logError(function (arg0, arg1) {
            arg0.height = arg1 >>> 0;
        }, arguments); },
        __wbg_set_innerHTML_97039584c4ab4c83: function() { return logError(function (arg0, arg1, arg2) {
            arg0.innerHTML = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_08e9f27a97fdc9f7: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_0a616f97d9fea14e: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_0e9f90ea4e961823: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_1736939dde71ec96: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_280bd57b618e4cf6: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_34d2766c2203f76a: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_4bf9f5458cdc0a68: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_797345a8c9c86146: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_7ffc64543f7a48e4: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_8fdd5f28eea3ca08: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_a4be4acc3510c62f: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_bb92451e0d92abf4: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_c3405868bd8f6ab5: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_d5519c3081c41e5a: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_d73358f96a62d3bc: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_f00eb249a34df7db: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_label_f571593aaa82f18b: function() { return logError(function (arg0, arg1, arg2) {
            arg0.label = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_layout_9590b02a1d72ac45: function() { return logError(function (arg0, arg1) {
            arg0.layout = arg1;
        }, arguments); },
        __wbg_set_layout_a065a939d1d05a2d: function() { return logError(function (arg0, arg1) {
            arg0.layout = arg1;
        }, arguments); },
        __wbg_set_layout_d008ec94bedc0844: function() { return logError(function (arg0, arg1) {
            arg0.layout = arg1;
        }, arguments); },
        __wbg_set_load_op_07c59d4ab60a3a01: function() { return logError(function (arg0, arg1) {
            arg0.loadOp = __wbindgen_enum_GpuLoadOp[arg1];
        }, arguments); },
        __wbg_set_lod_max_clamp_fd1548dc78538913: function() { return logError(function (arg0, arg1) {
            arg0.lodMaxClamp = arg1;
        }, arguments); },
        __wbg_set_lod_min_clamp_b489016289e378d2: function() { return logError(function (arg0, arg1) {
            arg0.lodMinClamp = arg1;
        }, arguments); },
        __wbg_set_mag_filter_b4e8d7f2fa665d2e: function() { return logError(function (arg0, arg1) {
            arg0.magFilter = __wbindgen_enum_GpuFilterMode[arg1];
        }, arguments); },
        __wbg_set_mapped_at_creation_c78869832c67816c: function() { return logError(function (arg0, arg1) {
            arg0.mappedAtCreation = arg1 !== 0;
        }, arguments); },
        __wbg_set_mask_cee9de29cbe61459: function() { return logError(function (arg0, arg1) {
            arg0.mask = arg1 >>> 0;
        }, arguments); },
        __wbg_set_max_anisotropy_a019fd38d9ba634e: function() { return logError(function (arg0, arg1) {
            arg0.maxAnisotropy = arg1;
        }, arguments); },
        __wbg_set_min_binding_size_26f877007450686c: function() { return logError(function (arg0, arg1) {
            arg0.minBindingSize = arg1;
        }, arguments); },
        __wbg_set_min_filter_cd8cf3dcdeebaa5b: function() { return logError(function (arg0, arg1) {
            arg0.minFilter = __wbindgen_enum_GpuFilterMode[arg1];
        }, arguments); },
        __wbg_set_mip_level_161666aedb691ca3: function() { return logError(function (arg0, arg1) {
            arg0.mipLevel = arg1 >>> 0;
        }, arguments); },
        __wbg_set_mip_level_count_1993f039035d2469: function() { return logError(function (arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        }, arguments); },
        __wbg_set_mip_level_count_9a86e098393fe360: function() { return logError(function (arg0, arg1) {
            arg0.mipLevelCount = arg1 >>> 0;
        }, arguments); },
        __wbg_set_mip_level_e61d3964c419f64b: function() { return logError(function (arg0, arg1) {
            arg0.mipLevel = arg1 >>> 0;
        }, arguments); },
        __wbg_set_mipmap_filter_a436d61249cfa785: function() { return logError(function (arg0, arg1) {
            arg0.mipmapFilter = __wbindgen_enum_GpuMipmapFilterMode[arg1];
        }, arguments); },
        __wbg_set_module_77c9a4994de5185d: function() { return logError(function (arg0, arg1) {
            arg0.module = arg1;
        }, arguments); },
        __wbg_set_module_951f2b6e5477a260: function() { return logError(function (arg0, arg1) {
            arg0.module = arg1;
        }, arguments); },
        __wbg_set_module_a7b3448454ca8879: function() { return logError(function (arg0, arg1) {
            arg0.module = arg1;
        }, arguments); },
        __wbg_set_multisample_bb6537e862d91237: function() { return logError(function (arg0, arg1) {
            arg0.multisample = arg1;
        }, arguments); },
        __wbg_set_multisampled_9642e942e4d9d3ee: function() { return logError(function (arg0, arg1) {
            arg0.multisampled = arg1 !== 0;
        }, arguments); },
        __wbg_set_offset_3e55dd16ffd7aac5: function() { return logError(function (arg0, arg1) {
            arg0.offset = arg1;
        }, arguments); },
        __wbg_set_offset_5c23fa7eb774d62b: function() { return logError(function (arg0, arg1) {
            arg0.offset = arg1;
        }, arguments); },
        __wbg_set_offset_a3a60cec10207186: function() { return logError(function (arg0, arg1) {
            arg0.offset = arg1;
        }, arguments); },
        __wbg_set_offset_debfe602a5fbf272: function() { return logError(function (arg0, arg1) {
            arg0.offset = arg1;
        }, arguments); },
        __wbg_set_once_617be4b8bd597c38: function() { return logError(function (arg0, arg1) {
            arg0.once = arg1 !== 0;
        }, arguments); },
        __wbg_set_onuncapturederror_8f485d34a545d58b: function() { return logError(function (arg0, arg1) {
            arg0.onuncapturederror = arg1;
        }, arguments); },
        __wbg_set_operation_74a529d361734388: function() { return logError(function (arg0, arg1) {
            arg0.operation = __wbindgen_enum_GpuBlendOperation[arg1];
        }, arguments); },
        __wbg_set_origin_42cf0cf261f50d63: function() { return logError(function (arg0, arg1) {
            arg0.origin = arg1;
        }, arguments); },
        __wbg_set_origin_d09654f499e9edb8: function() { return logError(function (arg0, arg1) {
            arg0.origin = arg1;
        }, arguments); },
        __wbg_set_origin_f7a8894367b28556: function() { return logError(function (arg0, arg1) {
            arg0.origin = arg1;
        }, arguments); },
        __wbg_set_pass_op_8abd39478c76666a: function() { return logError(function (arg0, arg1) {
            arg0.passOp = __wbindgen_enum_GpuStencilOperation[arg1];
        }, arguments); },
        __wbg_set_power_preference_b8b4ea5da6674cf7: function() { return logError(function (arg0, arg1) {
            arg0.powerPreference = __wbindgen_enum_GpuPowerPreference[arg1];
        }, arguments); },
        __wbg_set_premultiplied_alpha_dde44b27abcf88fc: function() { return logError(function (arg0, arg1) {
            arg0.premultipliedAlpha = arg1 !== 0;
        }, arguments); },
        __wbg_set_primitive_f189fcdcb22d09e0: function() { return logError(function (arg0, arg1) {
            arg0.primitive = arg1;
        }, arguments); },
        __wbg_set_query_set_2862e48f0ed8ffe8: function() { return logError(function (arg0, arg1) {
            arg0.querySet = arg1;
        }, arguments); },
        __wbg_set_query_set_dcf406a51ece8f85: function() { return logError(function (arg0, arg1) {
            arg0.querySet = arg1;
        }, arguments); },
        __wbg_set_r_8961014434a7656e: function() { return logError(function (arg0, arg1) {
            arg0.r = arg1;
        }, arguments); },
        __wbg_set_required_features_ec67124fd26c4d29: function() { return logError(function (arg0, arg1) {
            arg0.requiredFeatures = arg1;
        }, arguments); },
        __wbg_set_required_limits_c9ee7006f1d1f2ab: function() { return logError(function (arg0, arg1) {
            arg0.requiredLimits = arg1;
        }, arguments); },
        __wbg_set_resolve_target_cc7a6f0d2973ea34: function() { return logError(function (arg0, arg1) {
            arg0.resolveTarget = arg1;
        }, arguments); },
        __wbg_set_resource_86645e7515651c0e: function() { return logError(function (arg0, arg1) {
            arg0.resource = arg1;
        }, arguments); },
        __wbg_set_rows_per_image_0cc67df1420cf33b: function() { return logError(function (arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_rows_per_image_7203b6e2d244a111: function() { return logError(function (arg0, arg1) {
            arg0.rowsPerImage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_sample_count_4d7160817d98838f: function() { return logError(function (arg0, arg1) {
            arg0.sampleCount = arg1 >>> 0;
        }, arguments); },
        __wbg_set_sample_count_d024b677eb2337ba: function() { return logError(function (arg0, arg1) {
            arg0.sampleCount = arg1 >>> 0;
        }, arguments); },
        __wbg_set_sample_type_8d4d5b141ce0f724: function() { return logError(function (arg0, arg1) {
            arg0.sampleType = __wbindgen_enum_GpuTextureSampleType[arg1];
        }, arguments); },
        __wbg_set_sampler_35bcbac78bd4356f: function() { return logError(function (arg0, arg1) {
            arg0.sampler = arg1;
        }, arguments); },
        __wbg_set_shader_location_3ce5152f6d464a63: function() { return logError(function (arg0, arg1) {
            arg0.shaderLocation = arg1 >>> 0;
        }, arguments); },
        __wbg_set_size_81a77f7f4f34fbed: function() { return logError(function (arg0, arg1) {
            arg0.size = arg1;
        }, arguments); },
        __wbg_set_size_85cb1c2c4c3ea73a: function() { return logError(function (arg0, arg1) {
            arg0.size = arg1;
        }, arguments); },
        __wbg_set_size_981550e5d7941340: function() { return logError(function (arg0, arg1) {
            arg0.size = arg1;
        }, arguments); },
        __wbg_set_source_51577a2cebeadf81: function() { return logError(function (arg0, arg1) {
            arg0.source = arg1;
        }, arguments); },
        __wbg_set_src_factor_9a8e0943a05c9174: function() { return logError(function (arg0, arg1) {
            arg0.srcFactor = __wbindgen_enum_GpuBlendFactor[arg1];
        }, arguments); },
        __wbg_set_stencil_back_596ea9628419413d: function() { return logError(function (arg0, arg1) {
            arg0.stencilBack = arg1;
        }, arguments); },
        __wbg_set_stencil_clear_value_15afeb03c22cd51d: function() { return logError(function (arg0, arg1) {
            arg0.stencilClearValue = arg1 >>> 0;
        }, arguments); },
        __wbg_set_stencil_front_31be994e05be5aaa: function() { return logError(function (arg0, arg1) {
            arg0.stencilFront = arg1;
        }, arguments); },
        __wbg_set_stencil_load_op_1cd94e9e8c54f611: function() { return logError(function (arg0, arg1) {
            arg0.stencilLoadOp = __wbindgen_enum_GpuLoadOp[arg1];
        }, arguments); },
        __wbg_set_stencil_read_mask_1635f30a0e6539e3: function() { return logError(function (arg0, arg1) {
            arg0.stencilReadMask = arg1 >>> 0;
        }, arguments); },
        __wbg_set_stencil_read_only_0fbbafeb01f9f567: function() { return logError(function (arg0, arg1) {
            arg0.stencilReadOnly = arg1 !== 0;
        }, arguments); },
        __wbg_set_stencil_read_only_f071431988182ad8: function() { return logError(function (arg0, arg1) {
            arg0.stencilReadOnly = arg1 !== 0;
        }, arguments); },
        __wbg_set_stencil_store_op_a244d5347f386c8c: function() { return logError(function (arg0, arg1) {
            arg0.stencilStoreOp = __wbindgen_enum_GpuStoreOp[arg1];
        }, arguments); },
        __wbg_set_stencil_write_mask_7809f82a1debe58f: function() { return logError(function (arg0, arg1) {
            arg0.stencilWriteMask = arg1 >>> 0;
        }, arguments); },
        __wbg_set_step_mode_eb762c8c4264418f: function() { return logError(function (arg0, arg1) {
            arg0.stepMode = __wbindgen_enum_GpuVertexStepMode[arg1];
        }, arguments); },
        __wbg_set_storage_texture_22f78b5171d1195a: function() { return logError(function (arg0, arg1) {
            arg0.storageTexture = arg1;
        }, arguments); },
        __wbg_set_store_op_386596acc7bf2c16: function() { return logError(function (arg0, arg1) {
            arg0.storeOp = __wbindgen_enum_GpuStoreOp[arg1];
        }, arguments); },
        __wbg_set_strip_index_format_e76748cd840ab562: function() { return logError(function (arg0, arg1) {
            arg0.stripIndexFormat = __wbindgen_enum_GpuIndexFormat[arg1];
        }, arguments); },
        __wbg_set_tabIndex_54b2d0056f246f8c: function() { return logError(function (arg0, arg1) {
            arg0.tabIndex = arg1;
        }, arguments); },
        __wbg_set_targets_22473476afe0dabd: function() { return logError(function (arg0, arg1) {
            arg0.targets = arg1;
        }, arguments); },
        __wbg_set_texture_2c34d28ab9666948: function() { return logError(function (arg0, arg1) {
            arg0.texture = arg1;
        }, arguments); },
        __wbg_set_texture_ac9a46252c0cb532: function() { return logError(function (arg0, arg1) {
            arg0.texture = arg1;
        }, arguments); },
        __wbg_set_texture_aeea930400349204: function() { return logError(function (arg0, arg1) {
            arg0.texture = arg1;
        }, arguments); },
        __wbg_set_timestamp_writes_0236dfc7ae2b1a03: function() { return logError(function (arg0, arg1) {
            arg0.timestampWrites = arg1;
        }, arguments); },
        __wbg_set_timestamp_writes_d1259248cc80f658: function() { return logError(function (arg0, arg1) {
            arg0.timestampWrites = arg1;
        }, arguments); },
        __wbg_set_topology_e18a15a717ebc912: function() { return logError(function (arg0, arg1) {
            arg0.topology = __wbindgen_enum_GpuPrimitiveTopology[arg1];
        }, arguments); },
        __wbg_set_type_31b1662dd5a6144d: function() { return logError(function (arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuSamplerBindingType[arg1];
        }, arguments); },
        __wbg_set_type_33e79f1b45a78c37: function() { return logError(function (arg0, arg1, arg2) {
            arg0.type = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_type_719f40cf36d314f1: function() { return logError(function (arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuBufferBindingType[arg1];
        }, arguments); },
        __wbg_set_type_a7c7bbb08d6b2fe2: function() { return logError(function (arg0, arg1) {
            arg0.type = __wbindgen_enum_GpuQueryType[arg1];
        }, arguments); },
        __wbg_set_type_c460e0b6d347a46b: function() { return logError(function (arg0, arg1, arg2) {
            arg0.type = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_unclipped_depth_0f5d142d317e3a7c: function() { return logError(function (arg0, arg1) {
            arg0.unclippedDepth = arg1 !== 0;
        }, arguments); },
        __wbg_set_usage_26861a639595cd45: function() { return logError(function (arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_usage_7b79a227ada2f5cc: function() { return logError(function (arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_usage_d9ff4b7757fac246: function() { return logError(function (arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_usage_e8d45decd5c483b3: function() { return logError(function (arg0, arg1) {
            arg0.usage = arg1 >>> 0;
        }, arguments); },
        __wbg_set_value_0756834ee6cb3709: function() { return logError(function (arg0, arg1, arg2) {
            arg0.value = getStringFromWasm0(arg1, arg2);
        }, arguments); },
        __wbg_set_vertex_b95705590b782671: function() { return logError(function (arg0, arg1) {
            arg0.vertex = arg1;
        }, arguments); },
        __wbg_set_view_6ff951d6e3f9e337: function() { return logError(function (arg0, arg1) {
            arg0.view = arg1;
        }, arguments); },
        __wbg_set_view_cf298e1e7b6ef38a: function() { return logError(function (arg0, arg1) {
            arg0.view = arg1;
        }, arguments); },
        __wbg_set_view_dimension_87c95b0d987a14cd: function() { return logError(function (arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        }, arguments); },
        __wbg_set_view_dimension_e99ec138da7b8f83: function() { return logError(function (arg0, arg1) {
            arg0.viewDimension = __wbindgen_enum_GpuTextureViewDimension[arg1];
        }, arguments); },
        __wbg_set_view_formats_733fb624c2f2ef6b: function() { return logError(function (arg0, arg1) {
            arg0.viewFormats = arg1;
        }, arguments); },
        __wbg_set_view_formats_c2b27891ca5d2740: function() { return logError(function (arg0, arg1) {
            arg0.viewFormats = arg1;
        }, arguments); },
        __wbg_set_visibility_315bcac6427d0ba0: function() { return logError(function (arg0, arg1) {
            arg0.visibility = arg1 >>> 0;
        }, arguments); },
        __wbg_set_width_576343a4a7f2cf28: function() { return logError(function (arg0, arg1) {
            arg0.width = arg1 >>> 0;
        }, arguments); },
        __wbg_set_width_63034f88f9905ea3: function() { return logError(function (arg0, arg1) {
            arg0.width = arg1 >>> 0;
        }, arguments); },
        __wbg_set_width_c0fcaa2da53cd540: function() { return logError(function (arg0, arg1) {
            arg0.width = arg1 >>> 0;
        }, arguments); },
        __wbg_set_write_mask_0b6ca0cb1b797997: function() { return logError(function (arg0, arg1) {
            arg0.writeMask = arg1 >>> 0;
        }, arguments); },
        __wbg_set_x_0b48c73e72f71653: function() { return logError(function (arg0, arg1) {
            arg0.x = arg1 >>> 0;
        }, arguments); },
        __wbg_set_x_ffcb360b171098d5: function() { return logError(function (arg0, arg1) {
            arg0.x = arg1 >>> 0;
        }, arguments); },
        __wbg_set_y_046a6a6e9b0ccbc6: function() { return logError(function (arg0, arg1) {
            arg0.y = arg1 >>> 0;
        }, arguments); },
        __wbg_set_y_db82e366feb18537: function() { return logError(function (arg0, arg1) {
            arg0.y = arg1 >>> 0;
        }, arguments); },
        __wbg_set_z_cec02b76fd208d0e: function() { return logError(function (arg0, arg1) {
            arg0.z = arg1 >>> 0;
        }, arguments); },
        __wbg_shaderSource_06639e7b476e6ac2: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_shaderSource_2bca0edc97475e95: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.shaderSource(arg1, getStringFromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_shiftKey_5256a2168f9dc186: function() { return logError(function (arg0) {
            const ret = arg0.shiftKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_shiftKey_ec106aa0755af421: function() { return logError(function (arg0) {
            const ret = arg0.shiftKey;
            _assertBoolean(ret);
            return ret;
        }, arguments); },
        __wbg_size_819df95195daae81: function() { return logError(function (arg0) {
            const ret = arg0.size;
            return ret;
        }, arguments); },
        __wbg_size_c0f3d571b8977d71: function() { return logError(function (arg0) {
            const ret = arg0.size;
            return ret;
        }, arguments); },
        __wbg_stack_3b0d974bbf31e44f: function() { return logError(function (arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_stack_84752149fa5763ad: function() { return logError(function (arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_static_accessor_GLOBAL_8adb955bd33fac2f: function() { return logError(function () {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_static_accessor_GLOBAL_THIS_ad356e0db91c7913: function() { return logError(function () {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_static_accessor_SELF_f207c857566db248: function() { return logError(function () {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_static_accessor_WINDOW_bb9f1ba69d61b386: function() { return logError(function () {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_stencilFuncSeparate_18642df0574c1930: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
        }, arguments); },
        __wbg_stencilFuncSeparate_94ee4fbc164addec: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilFuncSeparate(arg1 >>> 0, arg2 >>> 0, arg3, arg4 >>> 0);
        }, arguments); },
        __wbg_stencilMaskSeparate_13b0475860a9b559: function() { return logError(function (arg0, arg1, arg2) {
            arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_stencilMaskSeparate_a7bd409376ee05ff: function() { return logError(function (arg0, arg1, arg2) {
            arg0.stencilMaskSeparate(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_stencilMask_326a11d0928c3808: function() { return logError(function (arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        }, arguments); },
        __wbg_stencilMask_6354f8ba392f6581: function() { return logError(function (arg0, arg1) {
            arg0.stencilMask(arg1 >>> 0);
        }, arguments); },
        __wbg_stencilOpSeparate_7e819381705b9731: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_stencilOpSeparate_8627d0f5f7fe5800: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.stencilOpSeparate(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
        }, arguments); },
        __wbg_stopPropagation_bab00a24a73a0c56: function() { return logError(function (arg0) {
            arg0.stopPropagation();
        }, arguments); },
        __wbg_style_b01fc765f98b99ff: function() { return logError(function (arg0) {
            const ret = arg0.style;
            return ret;
        }, arguments); },
        __wbg_submit_f39583470d95df20: function() { return logError(function (arg0, arg1) {
            arg0.submit(arg1);
        }, arguments); },
        __wbg_texImage2D_32ed4220040ca614: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_d8c284c813952313: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage2D_f4ae6c314a9a4bbe: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texImage3D_88ff1fa41be127b9: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
        }, arguments); },
        __wbg_texImage3D_9a207e0459a4f276: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10) {
            arg0.texImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8 >>> 0, arg9 >>> 0, arg10);
        }, arguments); },
        __wbg_texParameteri_f4b1596185f5432d: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        }, arguments); },
        __wbg_texParameteri_fcdec30159061963: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.texParameteri(arg1 >>> 0, arg2 >>> 0, arg3);
        }, arguments); },
        __wbg_texStorage2D_a84f74d36d279097: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.texStorage2D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_texStorage3D_aec6fc3e85ec72da: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.texStorage3D(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5, arg6);
        }, arguments); },
        __wbg_texSubImage2D_1e7d6febf82b9bed: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_271ffedb47424d0d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_3bb41b987f2bfe39: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_68e0413824eddc12: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_b6cdbbe62097211a: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_c8919d8f32f723da: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_d784df0b813dc1ab: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage2D_dd1d50234b61de4b: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
            arg0.texSubImage2D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7 >>> 0, arg8 >>> 0, arg9);
        }, arguments); },
        __wbg_texSubImage3D_09cc863aedf44a21: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_4665e67a8f0f7806: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_61ed187f3ec11ecc: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_6a46981af8bc8e49: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_9eca35d234d51b8a: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_b3cbbb79fe54da6d: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_texSubImage3D_f9c3af789162846a: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) {
            arg0.texSubImage3D(arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9 >>> 0, arg10 >>> 0, arg11);
        }, arguments); },
        __wbg_then_098abe61755d12f6: function() { return logError(function (arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        }, arguments); },
        __wbg_then_1d7a5273811a5cea: function() { return logError(function (arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        }, arguments); },
        __wbg_then_9e335f6dd892bc11: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_then_bc59d1943397ca4e: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_top_378559f0b38a1038: function() { return logError(function (arg0) {
            const ret = arg0.top;
            return ret;
        }, arguments); },
        __wbg_touches_bbc155f11e845656: function() { return logError(function (arg0) {
            const ret = arg0.touches;
            return ret;
        }, arguments); },
        __wbg_type_7a6bb36555a59d6d: function() { return logError(function (arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_type_ac121f1036f5729d: function() { return logError(function (arg0, arg1) {
            const ret = arg1.type;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_uniform1f_8c3b03df282dba21: function() { return logError(function (arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        }, arguments); },
        __wbg_uniform1f_b8841988568406b9: function() { return logError(function (arg0, arg1, arg2) {
            arg0.uniform1f(arg1, arg2);
        }, arguments); },
        __wbg_uniform1i_953040fb972e9fab: function() { return logError(function (arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        }, arguments); },
        __wbg_uniform1i_acd89bea81085be4: function() { return logError(function (arg0, arg1, arg2) {
            arg0.uniform1i(arg1, arg2);
        }, arguments); },
        __wbg_uniform1ui_9f8d9b877d6691d8: function() { return logError(function (arg0, arg1, arg2) {
            arg0.uniform1ui(arg1, arg2 >>> 0);
        }, arguments); },
        __wbg_uniform2fv_28fbf8836f3045d0: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform2fv_f3c92aab21d0dec3: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform2fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform2iv_892b6d31137ad198: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform2iv_f40f632615c5685a: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform2iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform2uiv_6d170469a702f23e: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform2uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform3fv_85a9a17c9635941b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform3fv_cdf7c84f9119f13b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform3fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform3iv_38e74d2ae9dfbfb8: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform3iv_4c372010ac6def3f: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform3iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform3uiv_bb7266bb3a5aef96: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform3uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform4f_0b00a34f4789ad14: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        }, arguments); },
        __wbg_uniform4f_7275e0fb864b7513: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.uniform4f(arg1, arg2, arg3, arg4, arg5);
        }, arguments); },
        __wbg_uniform4fv_a4cdb4bd66867df5: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform4fv_c416900acf65eca9: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform4fv(arg1, getArrayF32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform4iv_b49cd4acf0aa3ebc: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform4iv_d654af0e6b7bdb1a: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform4iv(arg1, getArrayI32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniform4uiv_e95d9a124fb8f91e: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniform4uiv(arg1, getArrayU32FromWasm0(arg2, arg3));
        }, arguments); },
        __wbg_uniformBlockBinding_a47fa267662afd7b: function() { return logError(function (arg0, arg1, arg2, arg3) {
            arg0.uniformBlockBinding(arg1, arg2 >>> 0, arg3 >>> 0);
        }, arguments); },
        __wbg_uniformMatrix2fv_4229ae27417c649a: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix2fv_648417dd2040de5b: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix2x3fv_eb9a53c8c9aa724b: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix2x4fv_8849517a52f2e845: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix2x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix3fv_244fc4416319c169: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix3fv_bafc2707d0c48e27: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix3x2fv_f1729eb13fcd41a3: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix3x4fv_3c11181f5fa929de: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix3x4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix4fv_4d322b295d122214: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix4fv_7c68dee5aee11694: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix4x2fv_5a8701b552d704af: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4x2fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_uniformMatrix4x3fv_741c3f4e0b2c7e04: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.uniformMatrix4x3fv(arg1, arg2 !== 0, getArrayF32FromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_unmap_9455a68932e9b935: function() { return logError(function (arg0) {
            arg0.unmap();
        }, arguments); },
        __wbg_usage_609dddbf539baf5f: function() { return logError(function (arg0) {
            const ret = arg0.usage;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_useProgram_49b77c7558a0646a: function() { return logError(function (arg0, arg1) {
            arg0.useProgram(arg1);
        }, arguments); },
        __wbg_useProgram_5405b431988b837b: function() { return logError(function (arg0, arg1) {
            arg0.useProgram(arg1);
        }, arguments); },
        __wbg_userAgent_161a5f2d2a8dee61: function() { return handleError(function (arg0, arg1) {
            const ret = arg1.userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_valueOf_5c6da6c9a85f34dc: function() { return logError(function (arg0) {
            const ret = arg0.valueOf();
            return ret;
        }, arguments); },
        __wbg_value_21fc78aab0322612: function() { return logError(function (arg0) {
            const ret = arg0.value;
            return ret;
        }, arguments); },
        __wbg_value_567d71719bef8eda: function() { return logError(function (arg0, arg1) {
            const ret = arg1.value;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_vertexAttribDivisorANGLE_b357aa2bf70d3dcf: function() { return logError(function (arg0, arg1, arg2) {
            arg0.vertexAttribDivisorANGLE(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_vertexAttribDivisor_99b2fd5affca539d: function() { return logError(function (arg0, arg1, arg2) {
            arg0.vertexAttribDivisor(arg1 >>> 0, arg2 >>> 0);
        }, arguments); },
        __wbg_vertexAttribIPointer_ecd3baef73ba0965: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.vertexAttribIPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4, arg5);
        }, arguments); },
        __wbg_vertexAttribPointer_ea73fc4cc5b7d647: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        }, arguments); },
        __wbg_vertexAttribPointer_f63675d7fad431e6: function() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);
        }, arguments); },
        __wbg_videoHeight_6dac1fd954779498: function() { return logError(function (arg0) {
            const ret = arg0.videoHeight;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_videoWidth_48f094fdc1b5ba64: function() { return logError(function (arg0) {
            const ret = arg0.videoWidth;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_viewport_63ee76a0f029804d: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_viewport_b60aceadb9166023: function() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.viewport(arg1, arg2, arg3, arg4);
        }, arguments); },
        __wbg_warn_69424c2d92a2fa73: function() { return logError(function (arg0) {
            console.warn(arg0);
        }, arguments); },
        __wbg_wgslLanguageFeatures_27532b83be8330a1: function() { return logError(function (arg0) {
            const ret = arg0.wgslLanguageFeatures;
            return ret;
        }, arguments); },
        __wbg_width_462295a1353ea71b: function() { return logError(function (arg0) {
            const ret = arg0.width;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_width_4d6fc7fecd877217: function() { return logError(function (arg0) {
            const ret = arg0.width;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_width_6a767700990b90f4: function() { return logError(function (arg0) {
            const ret = arg0.width;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_width_71d9d44b5e14c4b7: function() { return logError(function (arg0) {
            const ret = arg0.width;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_width_9824c1a2c17d3ebd: function() { return logError(function (arg0) {
            const ret = arg0.width;
            return ret;
        }, arguments); },
        __wbg_width_e0981c16dad36a72: function() { return logError(function (arg0) {
            const ret = arg0.width;
            _assertNum(ret);
            return ret;
        }, arguments); },
        __wbg_writeBuffer_2384abff9a0faef7: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            arg0.writeBuffer(arg1, arg2, getArrayU8FromWasm0(arg3, arg4), arg5, arg6);
        }, arguments); },
        __wbg_writeText_9a7de75ffb2482e6: function() { return logError(function (arg0, arg1, arg2) {
            const ret = arg0.writeText(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_writeTexture_d42ce6ec94b2c6ca: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
            arg0.writeTexture(arg1, getArrayU8FromWasm0(arg2, arg3), arg4, arg5);
        }, arguments); },
        __wbg_write_d8a8fbedf33f6abb: function() { return logError(function (arg0, arg1) {
            const ret = arg0.write(arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000001: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 1192, function: Function { arguments: [Externref], shim_idx: 1172, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hf4b4eef028da74aa, wasm_bindgen__convert__closures_____invoke__h7bfb04643f7ac75d);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000002: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 1193, function: Function { arguments: [NamedExternref("GPUUncapturedErrorEvent")], shim_idx: 1171, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__h546a012293a8d2af, wasm_bindgen__convert__closures_____invoke__hf6b83790e83b945e);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000003: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 1779, function: Function { arguments: [Externref], shim_idx: 3867, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hc5f2bce32e050ae0, wasm_bindgen__convert__closures_____invoke__h9e9e6773c03a2e06);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000004: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 732, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 733, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hc88b1da78e9decb3, wasm_bindgen__convert__closures_____invoke__had725f5ca96b17d9);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000005: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 734, function: Function { arguments: [NamedExternref("Event")], shim_idx: 735, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hce8615ec407fee8b, wasm_bindgen__convert__closures_____invoke__h7c11c2ef608e21a4);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000006: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { dtor_idx: 736, function: Function { arguments: [], shim_idx: 737, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm.wasm_bindgen__closure__destroy__hebc1a591ff60b5a5, wasm_bindgen__convert__closures_____invoke__h1a679fcfbd03af16);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000007: function() { return logError(function (arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000008: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(F32)) -> NamedExternref("Float32Array")`.
            const ret = getArrayF32FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_0000000000000009: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I16)) -> NamedExternref("Int16Array")`.
            const ret = getArrayI16FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000a: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I32)) -> NamedExternref("Int32Array")`.
            const ret = getArrayI32FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000b: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(I8)) -> NamedExternref("Int8Array")`.
            const ret = getArrayI8FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000c: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U16)) -> NamedExternref("Uint16Array")`.
            const ret = getArrayU16FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000d: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U32)) -> NamedExternref("Uint32Array")`.
            const ret = getArrayU32FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000e: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_cast_000000000000000f: function() { return logError(function (arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        }, arguments); },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./attractor_bg.js": import0,
    };
}


//#endregion
function wasm_bindgen__convert__closures_____invoke__h127529ea68f7d725(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h127529ea68f7d725(arg0, arg1);
    return ret !== 0;
}

function wasm_bindgen__convert__closures_____invoke__h1a679fcfbd03af16(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h1a679fcfbd03af16(arg0, arg1);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen__convert__closures_____invoke__h7bfb04643f7ac75d(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures_____invoke__h7bfb04643f7ac75d(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__hf6b83790e83b945e(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures_____invoke__hf6b83790e83b945e(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__had725f5ca96b17d9(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures_____invoke__had725f5ca96b17d9(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h7c11c2ef608e21a4(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures_____invoke__h7c11c2ef608e21a4(arg0, arg1, arg2);
}

function wasm_bindgen__convert__closures_____invoke__h9e9e6773c03a2e06(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    const ret = wasm.wasm_bindgen__convert__closures_____invoke__h9e9e6773c03a2e06(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}


const __wbindgen_enum_GpuAddressMode = ["clamp-to-edge", "repeat", "mirror-repeat"];


const __wbindgen_enum_GpuBlendFactor = ["zero", "one", "src", "one-minus-src", "src-alpha", "one-minus-src-alpha", "dst", "one-minus-dst", "dst-alpha", "one-minus-dst-alpha", "src-alpha-saturated", "constant", "one-minus-constant", "src1", "one-minus-src1", "src1-alpha", "one-minus-src1-alpha"];


const __wbindgen_enum_GpuBlendOperation = ["add", "subtract", "reverse-subtract", "min", "max"];


const __wbindgen_enum_GpuBufferBindingType = ["uniform", "storage", "read-only-storage"];


const __wbindgen_enum_GpuCanvasAlphaMode = ["opaque", "premultiplied"];


const __wbindgen_enum_GpuCompareFunction = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];


const __wbindgen_enum_GpuCullMode = ["none", "front", "back"];


const __wbindgen_enum_GpuDeviceLostReason = ["unknown", "destroyed"];


const __wbindgen_enum_GpuErrorFilter = ["validation", "out-of-memory", "internal"];


const __wbindgen_enum_GpuFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuFrontFace = ["ccw", "cw"];


const __wbindgen_enum_GpuIndexFormat = ["uint16", "uint32"];


const __wbindgen_enum_GpuLoadOp = ["load", "clear"];


const __wbindgen_enum_GpuMipmapFilterMode = ["nearest", "linear"];


const __wbindgen_enum_GpuPowerPreference = ["low-power", "high-performance"];


const __wbindgen_enum_GpuPrimitiveTopology = ["point-list", "line-list", "line-strip", "triangle-list", "triangle-strip"];


const __wbindgen_enum_GpuQueryType = ["occlusion", "timestamp"];


const __wbindgen_enum_GpuSamplerBindingType = ["filtering", "non-filtering", "comparison"];


const __wbindgen_enum_GpuStencilOperation = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];


const __wbindgen_enum_GpuStorageTextureAccess = ["write-only", "read-only", "read-write"];


const __wbindgen_enum_GpuStoreOp = ["store", "discard"];


const __wbindgen_enum_GpuTextureAspect = ["all", "stencil-only", "depth-only"];


const __wbindgen_enum_GpuTextureDimension = ["1d", "2d", "3d"];


const __wbindgen_enum_GpuTextureFormat = ["r8unorm", "r8snorm", "r8uint", "r8sint", "r16uint", "r16sint", "r16float", "rg8unorm", "rg8snorm", "rg8uint", "rg8sint", "r32uint", "r32sint", "r32float", "rg16uint", "rg16sint", "rg16float", "rgba8unorm", "rgba8unorm-srgb", "rgba8snorm", "rgba8uint", "rgba8sint", "bgra8unorm", "bgra8unorm-srgb", "rgb9e5ufloat", "rgb10a2uint", "rgb10a2unorm", "rg11b10ufloat", "rg32uint", "rg32sint", "rg32float", "rgba16uint", "rgba16sint", "rgba16float", "rgba32uint", "rgba32sint", "rgba32float", "stencil8", "depth16unorm", "depth24plus", "depth24plus-stencil8", "depth32float", "depth32float-stencil8", "bc1-rgba-unorm", "bc1-rgba-unorm-srgb", "bc2-rgba-unorm", "bc2-rgba-unorm-srgb", "bc3-rgba-unorm", "bc3-rgba-unorm-srgb", "bc4-r-unorm", "bc4-r-snorm", "bc5-rg-unorm", "bc5-rg-snorm", "bc6h-rgb-ufloat", "bc6h-rgb-float", "bc7-rgba-unorm", "bc7-rgba-unorm-srgb", "etc2-rgb8unorm", "etc2-rgb8unorm-srgb", "etc2-rgb8a1unorm", "etc2-rgb8a1unorm-srgb", "etc2-rgba8unorm", "etc2-rgba8unorm-srgb", "eac-r11unorm", "eac-r11snorm", "eac-rg11unorm", "eac-rg11snorm", "astc-4x4-unorm", "astc-4x4-unorm-srgb", "astc-5x4-unorm", "astc-5x4-unorm-srgb", "astc-5x5-unorm", "astc-5x5-unorm-srgb", "astc-6x5-unorm", "astc-6x5-unorm-srgb", "astc-6x6-unorm", "astc-6x6-unorm-srgb", "astc-8x5-unorm", "astc-8x5-unorm-srgb", "astc-8x6-unorm", "astc-8x6-unorm-srgb", "astc-8x8-unorm", "astc-8x8-unorm-srgb", "astc-10x5-unorm", "astc-10x5-unorm-srgb", "astc-10x6-unorm", "astc-10x6-unorm-srgb", "astc-10x8-unorm", "astc-10x8-unorm-srgb", "astc-10x10-unorm", "astc-10x10-unorm-srgb", "astc-12x10-unorm", "astc-12x10-unorm-srgb", "astc-12x12-unorm", "astc-12x12-unorm-srgb"];


const __wbindgen_enum_GpuTextureSampleType = ["float", "unfilterable-float", "depth", "sint", "uint"];


const __wbindgen_enum_GpuTextureViewDimension = ["1d", "2d", "2d-array", "cube", "cube-array", "3d"];


const __wbindgen_enum_GpuVertexFormat = ["uint8", "uint8x2", "uint8x4", "sint8", "sint8x2", "sint8x4", "unorm8", "unorm8x2", "unorm8x4", "snorm8", "snorm8x2", "snorm8x4", "uint16", "uint16x2", "uint16x4", "sint16", "sint16x2", "sint16x4", "unorm16", "unorm16x2", "unorm16x4", "snorm16", "snorm16x2", "snorm16x4", "float16", "float16x2", "float16x4", "float32", "float32x2", "float32x3", "float32x4", "uint32", "uint32x2", "uint32x3", "uint32x4", "sint32", "sint32x2", "sint32x3", "sint32x4", "unorm10-10-10-2", "unorm8x4-bgra"];


const __wbindgen_enum_GpuVertexStepMode = ["vertex", "instance"];


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


//#region intrinsics
function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error(`expected a boolean argument, found ${typeof(n)}`);
    }
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => state.dtor(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayF32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getFloat32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayI32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayI8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getInt8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

function getArrayU16FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint16ArrayMemory0().subarray(ptr / 2, ptr / 2 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

let cachedFloat32ArrayMemory0 = null;
function getFloat32ArrayMemory0() {
    if (cachedFloat32ArrayMemory0 === null || cachedFloat32ArrayMemory0.byteLength === 0) {
        cachedFloat32ArrayMemory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32ArrayMemory0;
}

let cachedInt16ArrayMemory0 = null;
function getInt16ArrayMemory0() {
    if (cachedInt16ArrayMemory0 === null || cachedInt16ArrayMemory0.byteLength === 0) {
        cachedInt16ArrayMemory0 = new Int16Array(wasm.memory.buffer);
    }
    return cachedInt16ArrayMemory0;
}

let cachedInt32ArrayMemory0 = null;
function getInt32ArrayMemory0() {
    if (cachedInt32ArrayMemory0 === null || cachedInt32ArrayMemory0.byteLength === 0) {
        cachedInt32ArrayMemory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32ArrayMemory0;
}

let cachedInt8ArrayMemory0 = null;
function getInt8ArrayMemory0() {
    if (cachedInt8ArrayMemory0 === null || cachedInt8ArrayMemory0.byteLength === 0) {
        cachedInt8ArrayMemory0 = new Int8Array(wasm.memory.buffer);
    }
    return cachedInt8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint16ArrayMemory0 = null;
function getUint16ArrayMemory0() {
    if (cachedUint16ArrayMemory0 === null || cachedUint16ArrayMemory0.byteLength === 0) {
        cachedUint16ArrayMemory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16ArrayMemory0;
}

let cachedUint32ArrayMemory0 = null;
function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            state.dtor(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (typeof(arg) !== 'string') throw new Error(`expected a string argument, found ${typeof(arg)}`);
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;


//#endregion

//#region wasm loading
let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedFloat32ArrayMemory0 = null;
    cachedInt16ArrayMemory0 = null;
    cachedInt32ArrayMemory0 = null;
    cachedInt8ArrayMemory0 = null;
    cachedUint16ArrayMemory0 = null;
    cachedUint32ArrayMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('attractor_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
//#endregion
export { wasm as __wasm }
