import ExpoModulesCore

public class SFSymbolModule: Module {
    
  public func definition() -> ModuleDefinition {

    Name("SFSymbol")

    View(SFSymbolView.self) {
        Prop("name") { (view: SFSymbolView, name: String?) in
            view.name = name
        }
        
        Prop("weight") { (view:SFSymbolView, weight: SFSymbolWeight?) in
            view.weight = weight
        }
        
        Prop("scale") { (view: SFSymbolView, scale: SFSymbolScale?) in
            view.scale = scale
        }
        
        Prop("size") { (view: SFSymbolView, size: Double?) in
            view.size = size
        }
        
        Prop("colors") { (view: SFSymbolView, colors: [UIColor]?) in
            view.colors = colors
        }
        
        Prop("renderingMode") { (view: SFSymbolView, renderingMode: SFSymbolRenderingMode?) in
            view.renderingMode = renderingMode
        }
        
        Prop("variableValue") { (view: SFSymbolView, variableValue: Double?) in
            view.variableValue = variableValue
        }
        
    }
  }
}
