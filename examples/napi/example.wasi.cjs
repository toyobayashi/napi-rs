/* eslint-disable */
/* prettier-ignore */

/* auto-generated by NAPI-RS */

const __nodeFs = require('node:fs')
const __nodePath = require('node:path')
const { WASI: __nodeWASI } = require('node:wasi')
const { Worker } = require('node:worker_threads')

const {
  instantiateNapiModuleSync: __emnapiInstantiateNapiModuleSync,
  getDefaultContext: __emnapiGetDefaultContext,
  createOnMessage: __wasmCreateOnMessageForFsProxy,
} = require('@napi-rs/wasm-runtime')

const __rootDir = __nodePath.parse(process.cwd()).root

const __wasi = new __nodeWASI({
  version: 'preview1',
  env: process.env,
  preopens: {
    [__rootDir]: __rootDir,
  }
})

const __emnapiContext = __emnapiGetDefaultContext()

const __sharedMemory = new WebAssembly.Memory({
  initial: 16384,
  maximum: 65536,
  shared: true,
})

let __wasmFilePath = __nodePath.join(__dirname, 'example.wasm32-wasi.wasm')
const __wasmDebugFilePath = __nodePath.join(__dirname, 'example.wasm32-wasi.debug.wasm')

if (__nodeFs.existsSync(__wasmDebugFilePath)) {
  __wasmFilePath = __wasmDebugFilePath
} else if (!__nodeFs.existsSync(__wasmFilePath)) {
  try {
    __wasmFilePath = __nodePath.resolve('@examples/napi-wasm32-wasi')
  } catch {
    throw new Error('Cannot find example.wasm32-wasi.wasm file, and @examples/napi-wasm32-wasi package is not installed.')
  }
}

const { instance: __napiInstance, module: __wasiModule, napiModule: __napiModule } = __emnapiInstantiateNapiModuleSync(__nodeFs.readFileSync(__wasmFilePath), {
  context: __emnapiContext,
  asyncWorkPoolSize: (function() {
    const threadsSizeFromEnv = Number(process.env.NAPI_RS_ASYNC_WORK_POOL_SIZE ?? process.env.UV_THREADPOOL_SIZE)
    // NaN > 0 is false
    if (threadsSizeFromEnv > 0) {
      return threadsSizeFromEnv
    } else {
      return 4
    }
  })(),
  wasi: __wasi,
  onCreateWorker() {
    const worker = new Worker(__nodePath.join(__dirname, 'wasi-worker.mjs'), {
      env: process.env,
      execArgv: ['--experimental-wasi-unstable-preview1'],
    })
    worker.onmessage = ({ data }) => {
      __wasmCreateOnMessageForFsProxy(__nodeFs)(data)
    }
    return worker
  },
  overwriteImports(importObject) {
    importObject.env = {
      ...importObject.env,
      ...importObject.napi,
      ...importObject.emnapi,
      memory: __sharedMemory,
    }
    return importObject
  },
  beforeInit({ instance }) {
    __napi_rs_initialize_modules(instance)
  }
})

function __napi_rs_initialize_modules(__napiInstance) {
  __napiInstance.exports['__napi_register__Shared_struct_0']?.()
  __napiInstance.exports['__napi_register__DEFAULT_COST_0']?.()
  __napiInstance.exports['__napi_register__TYPE_SKIPPED_CONST_1']?.()
  __napiInstance.exports['__napi_register__get_words_2']?.()
  __napiInstance.exports['__napi_register__get_nums_3']?.()
  __napiInstance.exports['__napi_register__sum_nums_4']?.()
  __napiInstance.exports['__napi_register__to_js_obj_5']?.()
  __napiInstance.exports['__napi_register__get_num_arr_6']?.()
  __napiInstance.exports['__napi_register__get_nested_num_arr_7']?.()
  __napiInstance.exports['__napi_register__read_file_async_8']?.()
  __napiInstance.exports['__napi_register__async_multi_two_9']?.()
  __napiInstance.exports['__napi_register__panic_in_async_10']?.()
  __napiInstance.exports['__napi_register__bigint_add_11']?.()
  __napiInstance.exports['__napi_register__create_big_int_12']?.()
  __napiInstance.exports['__napi_register__create_big_int_i64_13']?.()
  __napiInstance.exports['__napi_register__bigint_get_u64_as_string_14']?.()
  __napiInstance.exports['__napi_register__bigint_from_i64_15']?.()
  __napiInstance.exports['__napi_register__bigint_from_i128_16']?.()
  __napiInstance.exports['__napi_register__get_cwd_17']?.()
  __napiInstance.exports['__napi_register__option_end_18']?.()
  __napiInstance.exports['__napi_register__option_start_19']?.()
  __napiInstance.exports['__napi_register__option_start_end_20']?.()
  __napiInstance.exports['__napi_register__option_only_21']?.()
  __napiInstance.exports['__napi_register__read_file_22']?.()
  __napiInstance.exports['__napi_register__return_js_function_23']?.()
  __napiInstance.exports['__napi_register__callback_return_promise_24']?.()
  __napiInstance.exports['__napi_register__callback_return_promise_and_spawn_25']?.()
  __napiInstance.exports['__napi_register__capture_error_in_callback_26']?.()
  __napiInstance.exports['__napi_register__Animal_struct_27']?.()
  __napiInstance.exports['__napi_register__Animal_impl_39']?.()
  __napiInstance.exports['__napi_register__Dog_struct_40']?.()
  __napiInstance.exports['__napi_register__Bird_struct_41']?.()
  __napiInstance.exports['__napi_register__Bird_impl_46']?.()
  __napiInstance.exports['__napi_register__Blake2bHasher_struct_47']?.()
  __napiInstance.exports['__napi_register__Blake2bHasher_impl_49']?.()
  __napiInstance.exports['__napi_register__Blake2bHasher_impl_51']?.()
  __napiInstance.exports['__napi_register__Blake2bKey_struct_52']?.()
  __napiInstance.exports['__napi_register__Context_struct_53']?.()
  __napiInstance.exports['__napi_register__Context_impl_58']?.()
  __napiInstance.exports['__napi_register__AnimalWithDefaultConstructor_struct_59']?.()
  __napiInstance.exports['__napi_register__NinjaTurtle_struct_60']?.()
  __napiInstance.exports['__napi_register__NinjaTurtle_impl_67']?.()
  __napiInstance.exports['__napi_register__JsAssets_struct_68']?.()
  __napiInstance.exports['__napi_register__JsAssets_impl_71']?.()
  __napiInstance.exports['__napi_register__JsAsset_struct_72']?.()
  __napiInstance.exports['__napi_register__JsAsset_impl_75']?.()
  __napiInstance.exports['__napi_register__Optional_struct_76']?.()
  __napiInstance.exports['__napi_register__Optional_impl_81']?.()
  __napiInstance.exports['__napi_register__ObjectFieldClassInstance_struct_82']?.()
  __napiInstance.exports['__napi_register__create_object_with_class_field_83']?.()
  __napiInstance.exports['__napi_register__receive_object_with_class_field_84']?.()
  __napiInstance.exports['__napi_register__NotWritableClass_struct_85']?.()
  __napiInstance.exports['__napi_register__NotWritableClass_impl_87']?.()
  __napiInstance.exports['__napi_register__CustomFinalize_struct_88']?.()
  __napiInstance.exports['__napi_register__CustomFinalize_impl_90']?.()
  __napiInstance.exports['__napi_register__Width_struct_91']?.()
  __napiInstance.exports['__napi_register__plus_one_92']?.()
  __napiInstance.exports['__napi_register__GetterSetterWithClosures_struct_93']?.()
  __napiInstance.exports['__napi_register__GetterSetterWithClosures_impl_95']?.()
  __napiInstance.exports['__napi_register__CatchOnConstructor_struct_96']?.()
  __napiInstance.exports['__napi_register__CatchOnConstructor_impl_98']?.()
  __napiInstance.exports['__napi_register__CatchOnConstructor2_struct_99']?.()
  __napiInstance.exports['__napi_register__CatchOnConstructor2_impl_101']?.()
  __napiInstance.exports['__napi_register__ClassWithFactory_struct_102']?.()
  __napiInstance.exports['__napi_register__ClassWithFactory_impl_107']?.()
  __napiInstance.exports['__napi_register__Selector_struct_108']?.()
  __napiInstance.exports['__napi_register__date_to_number_109']?.()
  __napiInstance.exports['__napi_register__chrono_date_to_millis_110']?.()
  __napiInstance.exports['__napi_register__chrono_date_add_1_minute_111']?.()
  __napiInstance.exports['__napi_register__Dates_struct_112']?.()
  __napiInstance.exports['__napi_register__chrono_native_date_time_113']?.()
  __napiInstance.exports['__napi_register__chrono_native_date_time_return_114']?.()
  __napiInstance.exports['__napi_register__either_string_or_number_115']?.()
  __napiInstance.exports['__napi_register__return_either_116']?.()
  __napiInstance.exports['__napi_register__either3_117']?.()
  __napiInstance.exports['__napi_register__Obj_struct_118']?.()
  __napiInstance.exports['__napi_register__either4_119']?.()
  __napiInstance.exports['__napi_register__JsClassForEither_struct_120']?.()
  __napiInstance.exports['__napi_register__JsClassForEither_impl_122']?.()
  __napiInstance.exports['__napi_register__AnotherClassForEither_struct_123']?.()
  __napiInstance.exports['__napi_register__AnotherClassForEither_impl_125']?.()
  __napiInstance.exports['__napi_register__receive_class_or_number_126']?.()
  __napiInstance.exports['__napi_register__receive_mut_class_or_number_127']?.()
  __napiInstance.exports['__napi_register__receive_different_class_128']?.()
  __napiInstance.exports['__napi_register__return_either_class_129']?.()
  __napiInstance.exports['__napi_register__either_from_option_130']?.()
  __napiInstance.exports['__napi_register__A_struct_131']?.()
  __napiInstance.exports['__napi_register__B_struct_132']?.()
  __napiInstance.exports['__napi_register__C_struct_133']?.()
  __napiInstance.exports['__napi_register__either_from_objects_134']?.()
  __napiInstance.exports['__napi_register__either_bool_or_function_135']?.()
  __napiInstance.exports['__napi_register__promise_in_either_136']?.()
  __napiInstance.exports['__napi_register__either_bool_or_tuple_137']?.()
  __napiInstance.exports['__napi_register__Kind_138']?.()
  __napiInstance.exports['__napi_register__Empty_139']?.()
  __napiInstance.exports['__napi_register__Status_140']?.()
  __napiInstance.exports['__napi_register__StringEnum_141']?.()
  __napiInstance.exports['__napi_register__CustomNumEnum_142']?.()
  __napiInstance.exports['__napi_register__enum_to_i32_143']?.()
  __napiInstance.exports['__napi_register__SkippedEnums_144']?.()
  __napiInstance.exports['__napi_register__run_script_145']?.()
  __napiInstance.exports['__napi_register__get_module_file_name_146']?.()
  __napiInstance.exports['__napi_register__throw_syntax_error_147']?.()
  __napiInstance.exports['__napi_register__throw_error_148']?.()
  __napiInstance.exports['__napi_register__panic_149']?.()
  __napiInstance.exports['__napi_register__receive_string_150']?.()
  __napiInstance.exports['__napi_register__custom_status_code_151']?.()
  __napiInstance.exports['__napi_register__throw_async_error_152']?.()
  __napiInstance.exports['__napi_register__create_external_153']?.()
  __napiInstance.exports['__napi_register__create_external_string_154']?.()
  __napiInstance.exports['__napi_register__get_external_155']?.()
  __napiInstance.exports['__napi_register__mutate_external_156']?.()
  __napiInstance.exports['__napi_register__create_optional_external_157']?.()
  __napiInstance.exports['__napi_register__get_optional_external_158']?.()
  __napiInstance.exports['__napi_register__mutate_optional_external_159']?.()
  __napiInstance.exports['__napi_register__validate_array_160']?.()
  __napiInstance.exports['__napi_register__validate_buffer_161']?.()
  __napiInstance.exports['__napi_register__validate_typed_array_162']?.()
  __napiInstance.exports['__napi_register__validate_typed_array_slice_163']?.()
  __napiInstance.exports['__napi_register__validate_uint8_clamped_slice_164']?.()
  __napiInstance.exports['__napi_register__validate_buffer_slice_165']?.()
  __napiInstance.exports['__napi_register__validate_bigint_166']?.()
  __napiInstance.exports['__napi_register__validate_boolean_167']?.()
  __napiInstance.exports['__napi_register__validate_date_168']?.()
  __napiInstance.exports['__napi_register__validate_date_time_169']?.()
  __napiInstance.exports['__napi_register__validate_external_170']?.()
  __napiInstance.exports['__napi_register__validate_function_171']?.()
  __napiInstance.exports['__napi_register__validate_hash_map_172']?.()
  __napiInstance.exports['__napi_register__validate_null_173']?.()
  __napiInstance.exports['__napi_register__validate_undefined_174']?.()
  __napiInstance.exports['__napi_register__validate_number_175']?.()
  __napiInstance.exports['__napi_register__validate_promise_176']?.()
  __napiInstance.exports['__napi_register__validate_string_177']?.()
  __napiInstance.exports['__napi_register__validate_symbol_178']?.()
  __napiInstance.exports['__napi_register__validate_optional_179']?.()
  __napiInstance.exports['__napi_register__return_undefined_if_invalid_180']?.()
  __napiInstance.exports['__napi_register__return_undefined_if_invalid_promise_181']?.()
  __napiInstance.exports['__napi_register__ts_rename_182']?.()
  __napiInstance.exports['__napi_register__override_individual_arg_on_function_183']?.()
  __napiInstance.exports['__napi_register__override_individual_arg_on_function_with_cb_arg_184']?.()
  __napiInstance.exports['__napi_register__call0_185']?.()
  __napiInstance.exports['__napi_register__call1_186']?.()
  __napiInstance.exports['__napi_register__call2_187']?.()
  __napiInstance.exports['__napi_register__apply0_188']?.()
  __napiInstance.exports['__napi_register__apply1_189']?.()
  __napiInstance.exports['__napi_register__call_function_190']?.()
  __napiInstance.exports['__napi_register__call_function_with_arg_191']?.()
  __napiInstance.exports['__napi_register__create_reference_on_function_192']?.()
  __napiInstance.exports['__napi_register__call_function_with_arg_and_ctx_193']?.()
  __napiInstance.exports['__napi_register__reference_as_callback_194']?.()
  __napiInstance.exports['__napi_register__build_threadsafe_function_from_function_195']?.()
  __napiInstance.exports['__napi_register__Fib_struct_196']?.()
  __napiInstance.exports['__napi_register__Fib_impl_197']?.()
  __napiInstance.exports['__napi_register__Fib_impl_199']?.()
  __napiInstance.exports['__napi_register__Fib2_struct_200']?.()
  __napiInstance.exports['__napi_register__Fib2_impl_201']?.()
  __napiInstance.exports['__napi_register__Fib2_impl_203']?.()
  __napiInstance.exports['__napi_register__Fib3_struct_204']?.()
  __napiInstance.exports['__napi_register__Fib3_impl_205']?.()
  __napiInstance.exports['__napi_register__ALIGNMENT_206']?.()
  __napiInstance.exports['__napi_register__xxh64_207']?.()
  __napiInstance.exports['__napi_register__xxh128_208']?.()
  __napiInstance.exports['__napi_register__Xxh3_struct_209']?.()
  __napiInstance.exports['__napi_register__Xxh3_impl_213']?.()
  __napiInstance.exports['__napi_register__xxh2_plus_214']?.()
  __napiInstance.exports['__napi_register__xxh3_xxh64_alias_215']?.()
  __napiInstance.exports['__napi_register__xxh64_alias_216']?.()
  __napiInstance.exports['__napi_register__get_mapping_217']?.()
  __napiInstance.exports['__napi_register__sum_mapping_218']?.()
  __napiInstance.exports['__napi_register__get_btree_mapping_219']?.()
  __napiInstance.exports['__napi_register__sum_btree_mapping_220']?.()
  __napiInstance.exports['__napi_register__get_index_mapping_221']?.()
  __napiInstance.exports['__napi_register__sum_index_mapping_222']?.()
  __napiInstance.exports['__napi_register__indexmap_passthrough_223']?.()
  __napiInstance.exports['__napi_register__map_option_224']?.()
  __napiInstance.exports['__napi_register__return_null_225']?.()
  __napiInstance.exports['__napi_register__return_undefined_226']?.()
  __napiInstance.exports['__napi_register__UseNullableStruct_struct_227']?.()
  __napiInstance.exports['__napi_register__NotUseNullableStruct_struct_228']?.()
  __napiInstance.exports['__napi_register__DefaultUseNullableStruct_struct_229']?.()
  __napiInstance.exports['__napi_register__UseNullableClass_struct_230']?.()
  __napiInstance.exports['__napi_register__NotUseNullableClass_struct_231']?.()
  __napiInstance.exports['__napi_register__DefaultUseNullableClass_struct_232']?.()
  __napiInstance.exports['__napi_register__add_233']?.()
  __napiInstance.exports['__napi_register__fibonacci_234']?.()
  __napiInstance.exports['__napi_register__list_obj_keys_235']?.()
  __napiInstance.exports['__napi_register__create_obj_236']?.()
  __napiInstance.exports['__napi_register__get_global_237']?.()
  __napiInstance.exports['__napi_register__get_undefined_238']?.()
  __napiInstance.exports['__napi_register__get_null_239']?.()
  __napiInstance.exports['__napi_register__AllOptionalObject_struct_240']?.()
  __napiInstance.exports['__napi_register__receive_all_optional_object_241']?.()
  __napiInstance.exports['__napi_register__AliasedEnum_242']?.()
  __napiInstance.exports['__napi_register__StructContainsAliasedEnum_struct_243']?.()
  __napiInstance.exports['__napi_register__fn_received_aliased_244']?.()
  __napiInstance.exports['__napi_register__StrictObject_struct_245']?.()
  __napiInstance.exports['__napi_register__receive_strict_object_246']?.()
  __napiInstance.exports['__napi_register__get_str_from_object_247']?.()
  __napiInstance.exports['__napi_register__TsTypeChanged_struct_248']?.()
  __napiInstance.exports['__napi_register__create_obj_with_property_249']?.()
  __napiInstance.exports['__napi_register__getter_from_obj_250']?.()
  __napiInstance.exports['__napi_register__ObjectOnlyFromJs_struct_251']?.()
  __napiInstance.exports['__napi_register__receive_object_only_from_js_252']?.()
  __napiInstance.exports['__napi_register__object_get_named_property_should_perform_typecheck_253']?.()
  __napiInstance.exports['__napi_register__ObjectOnlyToJs_struct_254']?.()
  __napiInstance.exports['__napi_register__return_object_only_to_js_255']?.()
  __napiInstance.exports['__napi_register__async_plus_100_256']?.()
  __napiInstance.exports['__napi_register__JsRepo_struct_257']?.()
  __napiInstance.exports['__napi_register__JsRepo_impl_260']?.()
  __napiInstance.exports['__napi_register__JsRemote_struct_261']?.()
  __napiInstance.exports['__napi_register__JsRemote_impl_264']?.()
  __napiInstance.exports['__napi_register__CSSRuleList_struct_265']?.()
  __napiInstance.exports['__napi_register__CSSRuleList_impl_269']?.()
  __napiInstance.exports['__napi_register__CSSStyleSheet_struct_270']?.()
  __napiInstance.exports['__napi_register__AnotherCSSStyleSheet_struct_271']?.()
  __napiInstance.exports['__napi_register__AnotherCSSStyleSheet_impl_273']?.()
  __napiInstance.exports['__napi_register__CSSStyleSheet_impl_277']?.()
  __napiInstance.exports['__napi_register__PackageJson_struct_278']?.()
  __napiInstance.exports['__napi_register__read_package_json_279']?.()
  __napiInstance.exports['__napi_register__get_package_json_name_280']?.()
  __napiInstance.exports['__napi_register__test_serde_roundtrip_281']?.()
  __napiInstance.exports['__napi_register__test_serde_big_number_precision_282']?.()
  __napiInstance.exports['__napi_register__return_from_shared_crate_283']?.()
  __napiInstance.exports['__napi_register__contains_284']?.()
  __napiInstance.exports['__napi_register__concat_str_285']?.()
  __napiInstance.exports['__napi_register__concat_utf16_286']?.()
  __napiInstance.exports['__napi_register__concat_latin1_287']?.()
  __napiInstance.exports['__napi_register__roundtrip_str_288']?.()
  __napiInstance.exports['__napi_register__set_symbol_in_obj_289']?.()
  __napiInstance.exports['__napi_register__create_symbol_290']?.()
  __napiInstance.exports['__napi_register__create_symbol_for_291']?.()
  __napiInstance.exports['__napi_register__DelaySum_impl_292']?.()
  __napiInstance.exports['__napi_register__without_abort_controller_293']?.()
  __napiInstance.exports['__napi_register__with_abort_controller_294']?.()
  __napiInstance.exports['__napi_register__AsyncTaskVoidReturn_impl_295']?.()
  __napiInstance.exports['__napi_register__async_task_void_return_296']?.()
  __napiInstance.exports['__napi_register__AsyncTaskOptionalReturn_impl_297']?.()
  __napiInstance.exports['__napi_register__async_task_optional_return_298']?.()
  __napiInstance.exports['__napi_register__AsyncTaskReadFile_impl_299']?.()
  __napiInstance.exports['__napi_register__async_task_read_file_300']?.()
  __napiInstance.exports['__napi_register__call_threadsafe_function_301']?.()
  __napiInstance.exports['__napi_register__call_long_threadsafe_function_302']?.()
  __napiInstance.exports['__napi_register__threadsafe_function_throw_error_303']?.()
  __napiInstance.exports['__napi_register__threadsafe_function_fatal_mode_304']?.()
  __napiInstance.exports['__napi_register__threadsafe_function_fatal_mode_error_305']?.()
  __napiInstance.exports['__napi_register__threadsafe_function_closure_capture_306']?.()
  __napiInstance.exports['__napi_register__tsfn_call_with_callback_307']?.()
  __napiInstance.exports['__napi_register__tsfn_async_call_308']?.()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_309']?.()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_fatal_310']?.()
  __napiInstance.exports['__napi_register__accept_threadsafe_function_tuple_args_311']?.()
  __napiInstance.exports['__napi_register__tsfn_return_promise_312']?.()
  __napiInstance.exports['__napi_register__tsfn_return_promise_timeout_313']?.()
  __napiInstance.exports['__napi_register__tsfn_throw_from_js_314']?.()
  __napiInstance.exports['__napi_register__get_buffer_315']?.()
  __napiInstance.exports['__napi_register__append_buffer_316']?.()
  __napiInstance.exports['__napi_register__get_empty_buffer_317']?.()
  __napiInstance.exports['__napi_register__convert_u32_array_318']?.()
  __napiInstance.exports['__napi_register__create_external_typed_array_319']?.()
  __napiInstance.exports['__napi_register__mutate_typed_array_320']?.()
  __napiInstance.exports['__napi_register__deref_uint8_array_321']?.()
  __napiInstance.exports['__napi_register__buffer_pass_through_322']?.()
  __napiInstance.exports['__napi_register__array_buffer_pass_through_323']?.()
  __napiInstance.exports['__napi_register__accept_slice_324']?.()
  __napiInstance.exports['__napi_register__u8_array_to_array_325']?.()
  __napiInstance.exports['__napi_register__i8_array_to_array_326']?.()
  __napiInstance.exports['__napi_register__u16_array_to_array_327']?.()
  __napiInstance.exports['__napi_register__i16_array_to_array_328']?.()
  __napiInstance.exports['__napi_register__u32_array_to_array_329']?.()
  __napiInstance.exports['__napi_register__i32_array_to_array_330']?.()
  __napiInstance.exports['__napi_register__f32_array_to_array_331']?.()
  __napiInstance.exports['__napi_register__f64_array_to_array_332']?.()
  __napiInstance.exports['__napi_register__u64_array_to_array_333']?.()
  __napiInstance.exports['__napi_register__i64_array_to_array_334']?.()
  __napiInstance.exports['__napi_register__accept_uint8_clamped_slice_335']?.()
  __napiInstance.exports['__napi_register__accept_uint8_clamped_slice_and_buffer_slice_336']?.()
  __napiInstance.exports['__napi_register__AsyncBuffer_impl_337']?.()
  __napiInstance.exports['__napi_register__async_reduce_buffer_338']?.()
  __napiInstance.exports['__napi_register__async_buffer_to_array_339']?.()
}
module.exports.Animal = __napiModule.exports.Animal
module.exports.AnimalWithDefaultConstructor = __napiModule.exports.AnimalWithDefaultConstructor
module.exports.AnotherClassForEither = __napiModule.exports.AnotherClassForEither
module.exports.AnotherCssStyleSheet = __napiModule.exports.AnotherCssStyleSheet
module.exports.AnotherCSSStyleSheet = __napiModule.exports.AnotherCSSStyleSheet
module.exports.Asset = __napiModule.exports.Asset
module.exports.JsAsset = __napiModule.exports.JsAsset
module.exports.Assets = __napiModule.exports.Assets
module.exports.JsAssets = __napiModule.exports.JsAssets
module.exports.Bird = __napiModule.exports.Bird
module.exports.Blake2BHasher = __napiModule.exports.Blake2BHasher
module.exports.Blake2bHasher = __napiModule.exports.Blake2bHasher
module.exports.Blake2BKey = __napiModule.exports.Blake2BKey
module.exports.Blake2bKey = __napiModule.exports.Blake2bKey
module.exports.CatchOnConstructor = __napiModule.exports.CatchOnConstructor
module.exports.CatchOnConstructor2 = __napiModule.exports.CatchOnConstructor2
module.exports.ClassWithFactory = __napiModule.exports.ClassWithFactory
module.exports.Context = __napiModule.exports.Context
module.exports.CssRuleList = __napiModule.exports.CssRuleList
module.exports.CSSRuleList = __napiModule.exports.CSSRuleList
module.exports.CssStyleSheet = __napiModule.exports.CssStyleSheet
module.exports.CSSStyleSheet = __napiModule.exports.CSSStyleSheet
module.exports.CustomFinalize = __napiModule.exports.CustomFinalize
module.exports.DefaultUseNullableClass = __napiModule.exports.DefaultUseNullableClass
module.exports.Dog = __napiModule.exports.Dog
module.exports.Fib = __napiModule.exports.Fib
module.exports.Fib2 = __napiModule.exports.Fib2
module.exports.Fib3 = __napiModule.exports.Fib3
module.exports.GetterSetterWithClosures = __napiModule.exports.GetterSetterWithClosures
module.exports.JsClassForEither = __napiModule.exports.JsClassForEither
module.exports.JsRemote = __napiModule.exports.JsRemote
module.exports.JsRepo = __napiModule.exports.JsRepo
module.exports.NinjaTurtle = __napiModule.exports.NinjaTurtle
module.exports.NotUseNullableClass = __napiModule.exports.NotUseNullableClass
module.exports.NotWritableClass = __napiModule.exports.NotWritableClass
module.exports.Optional = __napiModule.exports.Optional
module.exports.Selector = __napiModule.exports.Selector
module.exports.UseNullableClass = __napiModule.exports.UseNullableClass
module.exports.Width = __napiModule.exports.Width
module.exports.acceptSlice = __napiModule.exports.acceptSlice
module.exports.acceptThreadsafeFunction = __napiModule.exports.acceptThreadsafeFunction
module.exports.acceptThreadsafeFunctionFatal = __napiModule.exports.acceptThreadsafeFunctionFatal
module.exports.acceptThreadsafeFunctionTupleArgs = __napiModule.exports.acceptThreadsafeFunctionTupleArgs
module.exports.acceptUint8ClampedSlice = __napiModule.exports.acceptUint8ClampedSlice
module.exports.acceptUint8ClampedSliceAndBufferSlice = __napiModule.exports.acceptUint8ClampedSliceAndBufferSlice
module.exports.add = __napiModule.exports.add
module.exports.ALIAS = __napiModule.exports.ALIAS
module.exports.AliasedEnum = __napiModule.exports.AliasedEnum
module.exports.appendBuffer = __napiModule.exports.appendBuffer
module.exports.apply0 = __napiModule.exports.apply0
module.exports.apply1 = __napiModule.exports.apply1
module.exports.arrayBufferPassThrough = __napiModule.exports.arrayBufferPassThrough
module.exports.asyncBufferToArray = __napiModule.exports.asyncBufferToArray
module.exports.asyncMultiTwo = __napiModule.exports.asyncMultiTwo
module.exports.asyncPlus100 = __napiModule.exports.asyncPlus100
module.exports.asyncReduceBuffer = __napiModule.exports.asyncReduceBuffer
module.exports.asyncTaskOptionalReturn = __napiModule.exports.asyncTaskOptionalReturn
module.exports.asyncTaskReadFile = __napiModule.exports.asyncTaskReadFile
module.exports.asyncTaskVoidReturn = __napiModule.exports.asyncTaskVoidReturn
module.exports.bigintAdd = __napiModule.exports.bigintAdd
module.exports.bigintFromI128 = __napiModule.exports.bigintFromI128
module.exports.bigintFromI64 = __napiModule.exports.bigintFromI64
module.exports.bigintGetU64AsString = __napiModule.exports.bigintGetU64AsString
module.exports.bufferPassThrough = __napiModule.exports.bufferPassThrough
module.exports.buildThreadsafeFunctionFromFunction = __napiModule.exports.buildThreadsafeFunctionFromFunction
module.exports.call0 = __napiModule.exports.call0
module.exports.call1 = __napiModule.exports.call1
module.exports.call2 = __napiModule.exports.call2
module.exports.callbackReturnPromise = __napiModule.exports.callbackReturnPromise
module.exports.callbackReturnPromiseAndSpawn = __napiModule.exports.callbackReturnPromiseAndSpawn
module.exports.callFunction = __napiModule.exports.callFunction
module.exports.callFunctionWithArg = __napiModule.exports.callFunctionWithArg
module.exports.callFunctionWithArgAndCtx = __napiModule.exports.callFunctionWithArgAndCtx
module.exports.callLongThreadsafeFunction = __napiModule.exports.callLongThreadsafeFunction
module.exports.callThreadsafeFunction = __napiModule.exports.callThreadsafeFunction
module.exports.captureErrorInCallback = __napiModule.exports.captureErrorInCallback
module.exports.chronoDateAdd1Minute = __napiModule.exports.chronoDateAdd1Minute
module.exports.chronoDateToMillis = __napiModule.exports.chronoDateToMillis
module.exports.chronoNativeDateTime = __napiModule.exports.chronoNativeDateTime
module.exports.chronoNativeDateTimeReturn = __napiModule.exports.chronoNativeDateTimeReturn
module.exports.concatLatin1 = __napiModule.exports.concatLatin1
module.exports.concatStr = __napiModule.exports.concatStr
module.exports.concatUtf16 = __napiModule.exports.concatUtf16
module.exports.contains = __napiModule.exports.contains
module.exports.convertU32Array = __napiModule.exports.convertU32Array
module.exports.createBigInt = __napiModule.exports.createBigInt
module.exports.createBigIntI64 = __napiModule.exports.createBigIntI64
module.exports.createExternal = __napiModule.exports.createExternal
module.exports.createExternalString = __napiModule.exports.createExternalString
module.exports.createExternalTypedArray = __napiModule.exports.createExternalTypedArray
module.exports.createObj = __napiModule.exports.createObj
module.exports.createObjectWithClassField = __napiModule.exports.createObjectWithClassField
module.exports.createObjWithProperty = __napiModule.exports.createObjWithProperty
module.exports.createOptionalExternal = __napiModule.exports.createOptionalExternal
module.exports.createReferenceOnFunction = __napiModule.exports.createReferenceOnFunction
module.exports.createSymbol = __napiModule.exports.createSymbol
module.exports.createSymbolFor = __napiModule.exports.createSymbolFor
module.exports.CustomNumEnum = __napiModule.exports.CustomNumEnum
module.exports.customStatusCode = __napiModule.exports.customStatusCode
module.exports.dateToNumber = __napiModule.exports.dateToNumber
module.exports.DEFAULT_COST = __napiModule.exports.DEFAULT_COST
module.exports.derefUint8Array = __napiModule.exports.derefUint8Array
module.exports.either3 = __napiModule.exports.either3
module.exports.either4 = __napiModule.exports.either4
module.exports.eitherBoolOrFunction = __napiModule.exports.eitherBoolOrFunction
module.exports.eitherBoolOrTuple = __napiModule.exports.eitherBoolOrTuple
module.exports.eitherFromObjects = __napiModule.exports.eitherFromObjects
module.exports.eitherFromOption = __napiModule.exports.eitherFromOption
module.exports.eitherStringOrNumber = __napiModule.exports.eitherStringOrNumber
module.exports.Empty = __napiModule.exports.Empty
module.exports.enumToI32 = __napiModule.exports.enumToI32
module.exports.f32ArrayToArray = __napiModule.exports.f32ArrayToArray
module.exports.f64ArrayToArray = __napiModule.exports.f64ArrayToArray
module.exports.fibonacci = __napiModule.exports.fibonacci
module.exports.fnReceivedAliased = __napiModule.exports.fnReceivedAliased
module.exports.getBtreeMapping = __napiModule.exports.getBtreeMapping
module.exports.getBuffer = __napiModule.exports.getBuffer
module.exports.getCwd = __napiModule.exports.getCwd
module.exports.getEmptyBuffer = __napiModule.exports.getEmptyBuffer
module.exports.getExternal = __napiModule.exports.getExternal
module.exports.getGlobal = __napiModule.exports.getGlobal
module.exports.getIndexMapping = __napiModule.exports.getIndexMapping
module.exports.getMapping = __napiModule.exports.getMapping
module.exports.getModuleFileName = __napiModule.exports.getModuleFileName
module.exports.getNestedNumArr = __napiModule.exports.getNestedNumArr
module.exports.getNull = __napiModule.exports.getNull
module.exports.getNumArr = __napiModule.exports.getNumArr
module.exports.getNums = __napiModule.exports.getNums
module.exports.getOptionalExternal = __napiModule.exports.getOptionalExternal
module.exports.getPackageJsonName = __napiModule.exports.getPackageJsonName
module.exports.getStrFromObject = __napiModule.exports.getStrFromObject
module.exports.getterFromObj = __napiModule.exports.getterFromObj
module.exports.getUndefined = __napiModule.exports.getUndefined
module.exports.getWords = __napiModule.exports.getWords
module.exports.i16ArrayToArray = __napiModule.exports.i16ArrayToArray
module.exports.i32ArrayToArray = __napiModule.exports.i32ArrayToArray
module.exports.i64ArrayToArray = __napiModule.exports.i64ArrayToArray
module.exports.i8ArrayToArray = __napiModule.exports.i8ArrayToArray
module.exports.indexmapPassthrough = __napiModule.exports.indexmapPassthrough
module.exports.Kind = __napiModule.exports.Kind
module.exports.listObjKeys = __napiModule.exports.listObjKeys
module.exports.mapOption = __napiModule.exports.mapOption
module.exports.mutateExternal = __napiModule.exports.mutateExternal
module.exports.mutateOptionalExternal = __napiModule.exports.mutateOptionalExternal
module.exports.mutateTypedArray = __napiModule.exports.mutateTypedArray
module.exports.objectGetNamedPropertyShouldPerformTypecheck = __napiModule.exports.objectGetNamedPropertyShouldPerformTypecheck
module.exports.optionEnd = __napiModule.exports.optionEnd
module.exports.optionOnly = __napiModule.exports.optionOnly
module.exports.optionStart = __napiModule.exports.optionStart
module.exports.optionStartEnd = __napiModule.exports.optionStartEnd
module.exports.overrideIndividualArgOnFunction = __napiModule.exports.overrideIndividualArgOnFunction
module.exports.overrideIndividualArgOnFunctionWithCbArg = __napiModule.exports.overrideIndividualArgOnFunctionWithCbArg
module.exports.panic = __napiModule.exports.panic
module.exports.panicInAsync = __napiModule.exports.panicInAsync
module.exports.plusOne = __napiModule.exports.plusOne
module.exports.promiseInEither = __napiModule.exports.promiseInEither
module.exports.readFile = __napiModule.exports.readFile
module.exports.readFileAsync = __napiModule.exports.readFileAsync
module.exports.readPackageJson = __napiModule.exports.readPackageJson
module.exports.receiveAllOptionalObject = __napiModule.exports.receiveAllOptionalObject
module.exports.receiveClassOrNumber = __napiModule.exports.receiveClassOrNumber
module.exports.receiveDifferentClass = __napiModule.exports.receiveDifferentClass
module.exports.receiveMutClassOrNumber = __napiModule.exports.receiveMutClassOrNumber
module.exports.receiveObjectOnlyFromJs = __napiModule.exports.receiveObjectOnlyFromJs
module.exports.receiveObjectWithClassField = __napiModule.exports.receiveObjectWithClassField
module.exports.receiveStrictObject = __napiModule.exports.receiveStrictObject
module.exports.receiveString = __napiModule.exports.receiveString
module.exports.referenceAsCallback = __napiModule.exports.referenceAsCallback
module.exports.returnEither = __napiModule.exports.returnEither
module.exports.returnEitherClass = __napiModule.exports.returnEitherClass
module.exports.returnFromSharedCrate = __napiModule.exports.returnFromSharedCrate
module.exports.returnJsFunction = __napiModule.exports.returnJsFunction
module.exports.returnNull = __napiModule.exports.returnNull
module.exports.returnObjectOnlyToJs = __napiModule.exports.returnObjectOnlyToJs
module.exports.returnUndefined = __napiModule.exports.returnUndefined
module.exports.returnUndefinedIfInvalid = __napiModule.exports.returnUndefinedIfInvalid
module.exports.returnUndefinedIfInvalidPromise = __napiModule.exports.returnUndefinedIfInvalidPromise
module.exports.roundtripStr = __napiModule.exports.roundtripStr
module.exports.runScript = __napiModule.exports.runScript
module.exports.setSymbolInObj = __napiModule.exports.setSymbolInObj
module.exports.Status = __napiModule.exports.Status
module.exports.StringEnum = __napiModule.exports.StringEnum
module.exports.sumBtreeMapping = __napiModule.exports.sumBtreeMapping
module.exports.sumIndexMapping = __napiModule.exports.sumIndexMapping
module.exports.sumMapping = __napiModule.exports.sumMapping
module.exports.sumNums = __napiModule.exports.sumNums
module.exports.testSerdeBigNumberPrecision = __napiModule.exports.testSerdeBigNumberPrecision
module.exports.testSerdeRoundtrip = __napiModule.exports.testSerdeRoundtrip
module.exports.threadsafeFunctionClosureCapture = __napiModule.exports.threadsafeFunctionClosureCapture
module.exports.threadsafeFunctionFatalMode = __napiModule.exports.threadsafeFunctionFatalMode
module.exports.threadsafeFunctionFatalModeError = __napiModule.exports.threadsafeFunctionFatalModeError
module.exports.threadsafeFunctionThrowError = __napiModule.exports.threadsafeFunctionThrowError
module.exports.throwAsyncError = __napiModule.exports.throwAsyncError
module.exports.throwError = __napiModule.exports.throwError
module.exports.throwSyntaxError = __napiModule.exports.throwSyntaxError
module.exports.toJsObj = __napiModule.exports.toJsObj
module.exports.tsfnAsyncCall = __napiModule.exports.tsfnAsyncCall
module.exports.tsfnCallWithCallback = __napiModule.exports.tsfnCallWithCallback
module.exports.tsfnReturnPromise = __napiModule.exports.tsfnReturnPromise
module.exports.tsfnReturnPromiseTimeout = __napiModule.exports.tsfnReturnPromiseTimeout
module.exports.tsfnThrowFromJs = __napiModule.exports.tsfnThrowFromJs
module.exports.tsRename = __napiModule.exports.tsRename
module.exports.u16ArrayToArray = __napiModule.exports.u16ArrayToArray
module.exports.u32ArrayToArray = __napiModule.exports.u32ArrayToArray
module.exports.u64ArrayToArray = __napiModule.exports.u64ArrayToArray
module.exports.u8ArrayToArray = __napiModule.exports.u8ArrayToArray
module.exports.validateArray = __napiModule.exports.validateArray
module.exports.validateBigint = __napiModule.exports.validateBigint
module.exports.validateBoolean = __napiModule.exports.validateBoolean
module.exports.validateBuffer = __napiModule.exports.validateBuffer
module.exports.validateBufferSlice = __napiModule.exports.validateBufferSlice
module.exports.validateDate = __napiModule.exports.validateDate
module.exports.validateDateTime = __napiModule.exports.validateDateTime
module.exports.validateExternal = __napiModule.exports.validateExternal
module.exports.validateFunction = __napiModule.exports.validateFunction
module.exports.validateHashMap = __napiModule.exports.validateHashMap
module.exports.validateNull = __napiModule.exports.validateNull
module.exports.validateNumber = __napiModule.exports.validateNumber
module.exports.validateOptional = __napiModule.exports.validateOptional
module.exports.validatePromise = __napiModule.exports.validatePromise
module.exports.validateString = __napiModule.exports.validateString
module.exports.validateSymbol = __napiModule.exports.validateSymbol
module.exports.validateTypedArray = __napiModule.exports.validateTypedArray
module.exports.validateTypedArraySlice = __napiModule.exports.validateTypedArraySlice
module.exports.validateUint8ClampedSlice = __napiModule.exports.validateUint8ClampedSlice
module.exports.validateUndefined = __napiModule.exports.validateUndefined
module.exports.withAbortController = __napiModule.exports.withAbortController
module.exports.withoutAbortController = __napiModule.exports.withoutAbortController
module.exports.xxh64Alias = __napiModule.exports.xxh64Alias
module.exports.xxh2 = __napiModule.exports.xxh2
module.exports.xxh3 = __napiModule.exports.xxh3
