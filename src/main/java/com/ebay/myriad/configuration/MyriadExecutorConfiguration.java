package com.ebay.myriad.configuration;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Optional;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *  Configuration for the Executor
 */
public class MyriadExecutorConfiguration {
    /**
     * Translates to -Xmx for the NodeManager JVM.
     */
    @JsonProperty
    private Double jvmMaxMemoryMB;

    @JsonProperty
    @NotEmpty
    private String path;

    public Optional<Double> getJvmMaxMemoryMB() {
        return Optional.fromNullable(jvmMaxMemoryMB);
    }

    public String getPath() {
        return path;
    }
}
