import ExpoModulesCore

public class SFSymbolModule: Module {
    
  public func definition() -> ModuleDefinition {

    Name("SFSymbol")

    View(SFSymbolView.self) {
        Prop("name") { (view: SFSymbolView, name: String?) in
            view.name = name ?? "questionmark"
        }
        
        Prop("weight") { (view:SFSymbolView, weight: SFSymbolWeight?) in
            view.weight = weight ?? .regular
        }
        
        Prop("scale") { (view: SFSymbolView, scale: SFSymbolScale?) in
            view.scale = scale ?? .medium
        }
        
        Prop("size") { (view: SFSymbolView, size: Double?) in
            view.size = size ?? 18.0
        }
        
        Prop("colors") { (view: SFSymbolView, colors: [UIColor]?) in
            view.colors = colors ?? [.systemBlue, .systemBlue]
        }
        
        Prop("renderingMode") { (view: SFSymbolView, renderingMode: SFSymbolRenderingMode?) in
            view.renderingMode = renderingMode ?? .monochrome
        }
        
        Prop("variableValue") { (view: SFSymbolView, variableValue: Double?) in
            view.variableValue = variableValue ?? 1.0
        }
        
    }
  }
}
