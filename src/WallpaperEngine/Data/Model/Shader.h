#pragma once

#include "WallpaperEngine/Data/Utils/TypeCaster.h"
#include <glm/glm.hpp>

namespace WallpaperEngine::Data::Model {
using namespace WallpaperEngine::Data::Utils;

struct ShaderSettings {
    float contrast = 1;
    float saturation = 1;
    glm::vec3 borderColour = glm::vec3 (0.0f, 0.0f, 0.0f);
    ;
};

} // namespace WallpaperEngine::Data::Model