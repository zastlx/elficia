System.register("chunks:///_virtual/DebuggerToolbox.ts", ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils.ts"], function (e) {
  var applyDecoratedSCriptor;
  var inheritsLoose;
  var initlizerDefineProperty;
  var assertedThisInitalizd;
  var __cc;
  var ccDecorator;
  var ccPrefab;
  var ccNode;
  var ccCCOBJECT;
  var ccinput;
  var ccInput;
  var ccKeyCode;
  var ccDirecotr;
  var ccInstanitate;
  var ccButton;
  var ccLabel;
  var ccComponent;
  var isInIFrame;
  var isMobile;
  return {
    setters: [function (bableHelpers) {
      applyDecoratedSCriptor = bableHelpers.applyDecoratedDescriptor;
      inheritsLoose = bableHelpers.inheritsLoose;
      initlizerDefineProperty = bableHelpers.initializerDefineProperty;
      assertedThisInitalizd = bableHelpers.assertThisInitialized;
    }, function (CC) {
      __cc = CC.cclegacy;
      ccDecorator = CC._decorator;
      ccPrefab = CC.Prefab;
      ccNode = CC.Node;
      ccCCOBJECT = CC.CCObject;
      ccinput = CC.input;
      ccInput = CC.Input;
      ccKeyCode = CC.KeyCode;
      ccDirecotr = CC.director;
      ccInstanitate = CC.instantiate;
      ccButton = CC.Button;
      ccLabel = CC.Label;
      ccComponent = CC.Component;
    }, function (utils) {
      isInIFrame = utils.inIFrame;
      isMobile = utils.isMobile;
    }],
    execute: function () {
      var ToolboxSectionClassDecorated;
      var PrefabDecoratorProperty;
      var _;
      var BaseClass;
      var ToolboxSection;
      var z;
      var S;
      var R;
      var A;
      var N;
      var k;
      var B;
      var D;
      var x;
      var E;
      var K;
      var I;
      var simpleButtonPrefab;
      var vertGroupPrefab;
      var columnRoot;
      var sections;
      var powerupPrefab;
      var networkPrefab;
      var cameraPrefab;
      var coursePrefab;

      __cc._RF.push({}, "6ec179VR5lA8rf8Fv5KJHpJ", "DebuggerToolbox", undefined);
      var ccClassDecorator = ccDecorator.ccclass;
      var ccDecoratorProperty = ccDecorator.property;
      ToolboxSectionClassDecorated = ccClassDecorator("ToolboxSection");
      PrefabDecoratorProperty = ccDecoratorProperty(ccPrefab);
      function createClass(base) {
        function ToolboxSection() {
          var instance;
          for (var index = arguments.length, args = new Array(index), a = 0; a < index; a++) {
            args[a] = arguments[a];
          }
          instance = base.call.apply(base, [this].concat(args)) || this;   
          initlizerDefineProperty(instance, "Prefab", ToolboxSection, assertedThisInitalizd(instance));
          initlizerDefineProperty(instance, "Name", z, assertedThisInitalizd(instance));
          return instance;
        }
        inheritsLoose(ToolboxSection, base);
        return ToolboxSection;
      }
      const thing = (ToolboxSection = applyDecoratedSCriptor((BaseClass = createClass(ccCCOBJECT)).prototype, "Prefab", [PrefabDecoratorProperty], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), z = applyDecoratedSCriptor(BaseClass.prototype, "Name", [ccDecoratorProperty], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _ = BaseClass);

      var DecoratedToolboxSection = ToolboxSectionClassDecorated(thing) || _;
      e("DebuggerToolbox", (S = ccClassDecorator("DebuggerToolbox"), R = ccDecoratorProperty(ccPrefab), A = ccDecoratorProperty(ccPrefab), N = ccDecoratorProperty([ccNode]), k = ccDecoratorProperty([DecoratedToolboxSection]), B = ccDecoratorProperty(ccPrefab), D = ccDecoratorProperty(ccPrefab), x = ccDecoratorProperty(ccPrefab), E = ccDecoratorProperty(ccPrefab), S((simpleButtonPrefab = applyDecoratedSCriptor((I = function (e) {
        function createPrefabeInstances() {
          var instnaace;
          for (var index = arguments.length, args = new Array(index), a = 0; a < index; a++) {
            args[a] = arguments[a];
          }
          instnaace = e.call.apply(e, [this].concat(args)) || this;
          initlizerDefineProperty(instnaace, "simpleButtonPrefab", simpleButtonPrefab, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "vertGroupPrefab", vertGroupPrefab, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "columnRoot", columnRoot, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "sections", sections, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "powerupPrefab", powerupPrefab, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "networkPrefab", networkPrefab, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "cameraPrefab", cameraPrefab, assertedThisInitalizd(instnaace));
          initlizerDefineProperty(instnaace, "coursePrefab", coursePrefab, assertedThisInitalizd(instnaace));
          instnaace._isShowing = false;
          instnaace._sectionNodes = [];
          instnaace._paused = false;
          return instnaace;
        }
        inheritsLoose(createPrefabeInstances, e);
        var createPrefabInstancesPrototype = createPrefabeInstances.prototype;

        createPrefabInstancesPrototype.start = () => {
          // If the environment is not enabled and the code is running in an iframe, destroy the node
          if ((!window._PuttEnv || !window._PuttEnv.enabled) && isInIFrame()) {
            this.node.destroy();
          } 
          // If the code is running on a mobile device, scale the node and adjust its position
          else if (isMobile()) {
            this.node.setScale(1.25, 1.25, 1.25);
            var currentPosition = this.node.position;
            this.node.setPosition(currentPosition.x + 50, currentPosition.y, currentPosition.z);
            ccinput.on(ccInput.EventType.TOUCH_START, this.onTouchStart, this);
          } 
          // If the code is running on a non-mobile device, listen for the KEY_UP event
          else {
            ccinput.on(ccInput.EventType.KEY_UP, this.onKeyUp, this);
          }
        };

        // logic for opening ui on mobile
        createPrefabInstancesPrototype.onTouchStart = function (e) {
          if (e.getAllTouches().length == 3) {
            this._isShowing = !this._isShowing;
            if (this._isShowing) {
              this.show();
            } else {
              this.hide();
            }
          }
        };

        // logit for opening ui on desktop
        createPrefabInstancesPrototype.onKeyUp = function (event) {
          if (event.keyCode == ccKeyCode.BACK_QUOTE) {
            this._isShowing = !this._isShowing;
            if (this._isShowing) {
              this.show();
            } else {
              this.hide();
            }
          } else if (event.keyCode == ccKeyCode.ARROW_DOWN) {
            ccDirecotr.pause();
          } else if (event.keyCode == ccKeyCode.ARROW_UP) {
            ccDirecotr.resume();
          }
        };

        // 
        createPrefabInstancesPrototype.show = function () {
          var self = this;
          var rootColumn = this.columnRoot[0];
          
          // Destroy all children of the root column
          rootColumn.destroyAllChildren();
          
          // Make the node active
          this.node.active = true;
          
          // Instantiate the vertical group prefab and add it as a child to the root column
          var vertGroupInstance = ccInstanitate(this.vertGroupPrefab);
          rootColumn.addChild(vertGroupInstance);
          
          // Initialize the section nodes array
          this._sectionNodes = [];
          
          var createSection = function (sectionIndex) {
            var section = self.sections[sectionIndex];
            
            // Instantiate the section prefab and add it as a child to the root column
            var sectionInstance = ccInstanitate(section.Prefab);
            rootColumn.addChild(sectionInstance);
            
            // Initially, make the section instance inactive
            sectionInstance.active = false;
            
            // Add the section instance to the section nodes array
            self._sectionNodes.push(sectionInstance);
            
            // Create a button for the section
            self.makeButton(vertGroupInstance, section.Name, function () {
              for (var i = 0; i < self._sectionNodes.length; ++i) {
                // Only the section corresponding to the clicked button should be active
                self._sectionNodes[i].active = i == sectionIndex;
              }
            });
          };
          
          // Create a section for each section in the sections array
          for (var i = 0; i < this.sections.length; ++i) {
            createSection(i);
          }
        };

        createPrefabInstancesPrototype.makeButton = function (e, t, i) {
          var o = ccInstanitate(this.simpleButtonPrefab);
          var n = o.getComponentInChildren(ccButton);
          var r = o.getComponentInChildren(ccLabel);
          e.addChild(o);
          r.string = t;
          n.node.on(ccButton.EventType.CLICK, function (e) {
            i();
          });
        };


        createPrefabInstancesPrototype.hide = function () {
          this.columnRoot[0].destroyAllChildren();
          this.node.active = false;
        };
        return createPrefabeInstances;
      }(ccComponent)).prototype, "simpleButtonPrefab", [R], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), vertGroupPrefab = applyDecoratedSCriptor(I.prototype, "vertGroupPrefab", [A], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), columnRoot = applyDecoratedSCriptor(I.prototype, "columnRoot", [N], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), sections = applyDecoratedSCriptor(I.prototype, "sections", [k], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), powerupPrefab = applyDecoratedSCriptor(I.prototype, "powerupPrefab", [B], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), networkPrefab = applyDecoratedSCriptor(I.prototype, "networkPrefab", [D], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), cameraPrefab = applyDecoratedSCriptor(I.prototype, "cameraPrefab", [x], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), coursePrefab = applyDecoratedSCriptor(I.prototype, "coursePrefab", [E], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), K = I)) || K));
      __cc._RF.pop();
    }
  };
});