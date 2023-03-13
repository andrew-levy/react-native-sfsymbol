import ExpoModulesCore

class SFSymbolView: ExpoView {
    
    var imageView = UIImageView(frame: .zero)
    var name: String?
    var weight: SFSymbolWeight?
    var scale: SFSymbolScale?
    var renderingMode: SFSymbolRenderingMode?
    var colors: [UIColor]?
    var variableValue: Double?
    var size: Double?
    
    required init(appContext: AppContext? = nil) {
        super.init(appContext: appContext)
        addSubview(imageView)
    }
    
    public override var bounds: CGRect {
      didSet {
        if oldValue.size != bounds.size && window != nil {
          renderSFSymbol()
        }
      }
    }

    private func renderSFSymbol() {
        let symbolName = name ?? ""
        let symbolWeight = weight?.toSFSymbolWeight() ?? .regular
        let symbolSize = size ?? 42
        let symbolScale = scale?.toSFSymbolScale() ?? .small
        let symbolColor = colors?[0] ?? .systemBlue
        let symbolColors = colors ?? [.systemBlue, .systemBlue]
        let symbolVariableValue = variableValue ?? 1.0
        
        var config = UIImage.SymbolConfiguration(pointSize: symbolSize, weight: symbolWeight, scale: symbolScale)

        if renderingMode == .hierarchical, #available(iOS 15.0, *) {
            config = config.applying(UIImage.SymbolConfiguration(hierarchicalColor: symbolColor))
        } else if renderingMode == .palette, #available(iOS 15.0, *) {
            config = config.applying(UIImage.SymbolConfiguration(paletteColors: symbolColors))
        } else if renderingMode == .multicolor, #available(iOS 16.0, *) {
            config = config.applying(UIImage.SymbolConfiguration.preferringMulticolor())
        } else if renderingMode == .monochrome {
            imageView.tintColor = symbolColor
        }

        var sfSymbolImage = UIImage(systemName: symbolName, withConfiguration: config)

        if #available(iOS 16.0, *) {
            sfSymbolImage = UIImage(systemName: symbolName, variableValue: symbolVariableValue, configuration: config)
        }
        
        imageView.frame = CGRect(x: 0, y: 0, width: symbolSize, height: symbolSize)
        imageView.contentMode = .center
        imageView.image = sfSymbolImage
    }
  
}
