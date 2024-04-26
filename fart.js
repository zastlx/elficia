System.register("chunks:///_virtual/DebuggerToolbox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils.ts"], (function(e) {
    var applyDecoratedSCriptor, inheritsLoose, initlizerDefineProperty, assertedThisInitalizd, __cc, ccDecorator, ccPrefabe, ccNode, ccCCOBJECT, ccinput, ccInput, ccKeyCode, ccDirecotr, ccInstanitate, ccButton, ccLabel, ccComponent, isInIFrame, isMobile;
    return {
        setters: [function(bableHelpers) {
            applyDecoratedSCriptor = bableHelpers.applyDecoratedDescriptor,
            inheritsLoose = bableHelpers.inheritsLoose,
            initlizerDefineProperty = bableHelpers.initializerDefineProperty,
            assertedThisInitalizd = bableHelpers.assertThisInitialized
        }
        , function(e) {
            __cc = e.cclegacy,
            ccDecorator = e._decorator,
            ccPrefabe = e.Prefab,
            ccNode = e.Node,
            ccCCOBJECT = e.CCObject,
            ccinput = e.input,
            ccInput = e.Input,
            ccKeyCode = e.KeyCode,
            ccDirecotr = e.director,
            ccInstanitate = e.instantiate,
            ccButton = e.Button,
            ccLabel = e.Label,
            ccComponent = e.Component
        }
        , function(e) {
            isInIFrame = e.inIFrame,
            isMobile = e.isMobile
        }
        ],
        execute: function() {
            var ToolboxSectionClassDecorated, P, _, C, T, z, S, R, A, N, k, B, D, x, E, K, I, O, U, F, L, G, H, W, j;
            __cc._RF.push({}, "6ec179VR5lA8rf8Fv5KJHpJ", "DebuggerToolbox", void 0);
            var ccClassDecorator = ccDecorator.ccclass
              , ccDecoratorProperty = ccDecorator.property
              , Q = (ToolboxSectionClassDecorated = ccClassDecorator("ToolboxSection"),
            P = ccDecoratorProperty(ccPrefabe),
            ToolboxSectionClassDecorated((T = applyDecoratedSCriptor((C = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    initlizerDefineProperty(t, "Prefab", T, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "Name", z, assertedThisInitalizd(t)),
                    t
                }
                return inheritsLoose(t, e),
                t
            }(ccCCOBJECT)).prototype, "Prefab", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            z = applyDecoratedSCriptor(C.prototype, "Name", [ccDecoratorProperty], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return ""
                }
            }),
            _ = C)) || _);
            e("DebuggerToolbox", (S = ccClassDecorator("DebuggerToolbox"),
            R = ccDecoratorProperty(ccPrefabe),
            A = ccDecoratorProperty(ccPrefabe),
            N = ccDecoratorProperty([ccNode]),
            k = ccDecoratorProperty([Q]),
            B = ccDecoratorProperty(ccPrefabe),
            D = ccDecoratorProperty(ccPrefabe),
            x = ccDecoratorProperty(ccPrefabe),
            E = ccDecoratorProperty(ccPrefabe),
            S((O = applyDecoratedSCriptor((I = function(e) {
                function t() {
                    for (var t, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
                        r[a] = arguments[a];
                    return t = e.call.apply(e, [this].concat(r)) || this,
                    initlizerDefineProperty(t, "simpleButtonPrefab", O, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "vertGroupPrefab", U, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "columnRoot", F, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "sections", L, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "powerupPrefab", G, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "networkPrefab", H, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "cameraPrefab", W, assertedThisInitalizd(t)),
                    initlizerDefineProperty(t, "coursePrefab", j, assertedThisInitalizd(t)),
                    t._isShowing = !1,
                    t._sectionNodes = [],
                    t._paused = !1,
                    t
                }
                inheritsLoose(t, e);
                var r = t.prototype;
                return r.start = function() {
                    if (!(window._PuttEnv && window._PuttEnv.enabled || !1) && isInIFrame())
                        this.node.destroy();
                    else if (isMobile()) {
                        this.node.setScale(1.25, 1.25, 1.25);
                        var e = this.node.position;
                        this.node.setPosition(e.x + 50, e.y, e.z),
                        ccinput.on(ccInput.EventType.TOUCH_START, this.onTouchStart, this)
                    } else
                        ccinput.on(ccInput.EventType.KEY_UP, this.onKeyUp, this)
                }
                ,
                r.onTouchStart = function(e) {
                    3 == e.getAllTouches().length && (this._isShowing = !this._isShowing,
                    this._isShowing ? this.show() : this.hide())
                }
                ,
                r.onKeyUp = function(e) {
                    e.keyCode == ccKeyCode.BACK_QUOTE ? (this._isShowing = !this._isShowing,
                    this._isShowing ? this.show() : this.hide()) : e.keyCode == ccKeyCode.ARROW_DOWN ? ccDirecotr.pause() : e.keyCode == ccKeyCode.ARROW_UP && ccDirecotr.resume()
                }
                ,
                r.show = function() {
                    var e = this
                      , t = this.columnRoot[0];
                    t.destroyAllChildren(),
                    this.node.active = !0;
                    var i = ccInstanitate(this.vertGroupPrefab);
                    t.addChild(i),
                    this._sectionNodes = [];
                    for (var o = function(o) {
                        var n = e.sections[o]
                          , r = ccInstanitate(n.Prefab);
                        t.addChild(r),
                        r.active = !1,
                        e._sectionNodes.push(r),
                        e.makeButton(i, n.Name, (function() {
                            for (var t = o, i = 0; i < e._sectionNodes.length; ++i)
                                e._sectionNodes[i].active = i == t
                        }
                        ))
                    }, n = 0; n < this.sections.length; ++n)
                        o(n)
                }
                ,
                r.makeButton = function(e, t, i) {
                    var o = ccInstanitate(this.simpleButtonPrefab)
                      , n = o.getComponentInChildren(ccButton)
                      , r = o.getComponentInChildren(ccLabel);
                    e.addChild(o),
                    r.string = t,
                    n.node.on(ccButton.EventType.CLICK, (function(e) {
                        i()
                    }
                    ))
                }
                ,
                r.hide = function() {
                    this.columnRoot[0].destroyAllChildren(),
                    this.node.active = !1
                }
                ,
                t
            }(ccComponent)).prototype, "simpleButtonPrefab", [R], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            U = applyDecoratedSCriptor(I.prototype, "vertGroupPrefab", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            F = applyDecoratedSCriptor(I.prototype, "columnRoot", [N], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            L = applyDecoratedSCriptor(I.prototype, "sections", [k], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return []
                }
            }),
            G = applyDecoratedSCriptor(I.prototype, "powerupPrefab", [B], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            H = applyDecoratedSCriptor(I.prototype, "networkPrefab", [D], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            W = applyDecoratedSCriptor(I.prototype, "cameraPrefab", [x], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            j = applyDecoratedSCriptor(I.prototype, "coursePrefab", [E], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }),
            K = I)) || K));
            __cc._RF.pop()
        }
    }
}
));

System.register("chunks:///_virtual/DGMath.ts", ["cc"], (function(t) {
    var n, e, r;
    return {
        setters: [function(t) {
            n = t.cclegacy,
            e = t._decorator,
            r = t.Vec3
        }
        ],
        execute: function() {
            var c;
            n._RF.push({}, "1500fu+7CVJ2YsBkK8QIrZK", "DGMath", void 0);
            var u = e.ccclass;
            e.property,
            t("DGMath", u("DGMath")(c = function() {
                function t() {}
                return t.getSign = function(t) {
                    return t >= 0 ? 1 : -1
                }
                ,
                t.getSignedAngle = function(t, n, e) {
                    var c = r.angle(t, n) * (180 / Math.PI)
                      , u = t.y * n.z - t.z * n.y
                      , a = t.z * n.x - t.x * n.z
                      , i = t.x * n.y - t.y * n.x;
                    return c * this.getSign(e.x * u + e.y * a + e.z * i)
                }
                ,
                t
            }()) || c);
            n._RF.pop()
        }
    }
}
));