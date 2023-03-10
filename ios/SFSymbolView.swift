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
        var config = UIImage.SymbolConfiguration(weight: weight?.toSFSymbolWeight() ?? .regular)
        config = config.applying(UIImage.SymbolConfiguration(scale: scale?.toSFSymbolScale() ?? .medium))

        if renderingMode == .hierarchical, #available(iOS 15.0, *) {
            config = config.applying(UIImage.SymbolConfiguration(hierarchicalColor: colors?[0] ?? .systemBlue))
        } else if renderingMode == .palette, #available(iOS 15.0, *) {
            config = config.applying(UIImage.SymbolConfiguration(paletteColors: colors ?? [.systemBlue, .systemBlue]))
        } else if renderingMode == .multicolor, #available(iOS 16.0, *) {
            config = config.applying(UIImage.SymbolConfiguration.preferringMulticolor())
        } else if renderingMode == .monochrome {
            imageView.tintColor = colors?[0] ?? .systemBlue
        }
        
        var sfSymbolImage = UIImage(systemName: name ?? "", withConfiguration: config)
        
        if #available(iOS 16.0, *) {
            sfSymbolImage = UIImage(systemName: name ?? "", variableValue: variableValue ?? 1.0, configuration: config)
        }

        imageView.contentMode = .scaleAspectFit
        imageView.frame = CGRect(x: 0, y: 0, width: size ?? 42.0, height: size ?? 42.0)
        imageView.image = sfSymbolImage
    }
  
}
