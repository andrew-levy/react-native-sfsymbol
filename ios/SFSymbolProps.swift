import ExpoModulesCore

enum SFSymbolRenderingMode: String, Enumerable {
    case hierarchical
    case palette
    case multicolor
    case monochrome
}

enum SFSymbolScale: String, Enumerable {
    case small
    case medium
    case large
    
    func toSFSymbolScale() -> UIImage.SymbolScale {
        switch self {
        case .small:
            return .small
        case .medium:
            return .medium
        case .large:
            return .large
        }
    }
}

enum SFSymbolWeight: String, Enumerable {
    case bold
    case heavy
    case medium
    case light
    case regular
    case semibold
    case thin
    case ultraLight
    case black
    
    func toSFSymbolWeight() -> UIImage.SymbolWeight {
        switch self {
        case .bold:
            return .bold
        case .heavy:
            return .heavy
        case .medium:
            return .medium
        case .light:
            return .light
        case .regular:
            return .regular
        case .semibold:
            return .semibold
        case .thin:
            return .thin
        case .ultraLight:
            return .ultraLight
        case .black:
            return .black
        }
    }
}

